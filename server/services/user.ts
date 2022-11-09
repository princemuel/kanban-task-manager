import { AuthenticationError, ForbiddenError } from 'apollo-server-micro';
import { setCookie } from 'cookies-next';
import { LoginData } from 'lib/schema/models';
import { disconnectDB } from 'server/config';
import { deserializeUser, errorHandler } from 'server/middleware';
import { User, UserModel } from 'server/models';
import {
  accessTokenCookieOptions,
  accessTokenExpiresIn,
  cookieOptions,
  findByEmail,
  refreshTokenCookieOptions,
  sign,
  signTokens,
  verify,
} from 'server/utilities';
import type { IUserContext } from 'types';

if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
// Generate Tokens

export class UserService {
  /**
   * @desc Create New User
   * @access Private
   * @param input User
   * @returns
   */
  public async createUser(input: Partial<User>) {
    try {
      const user = await UserModel.create(input);
      await disconnectDB();
      return {
        status: 'success',
        user: user.toJSON(),
      };
    } catch (error: any) {
      if (error.code === 11000) {
        return new ForbiddenError('This email already exists');
      }
      errorHandler(error);
    }
  }

  /**
   * @desc Login a user
   * @access Private
   * @param input User
   * @returns
   */
  public async login(input: LoginData, { req, res }: IUserContext) {
    try {
      const message = 'Invalid email or password';
      // Find a user by email
      const user = await findByEmail(input.email);
      await disconnectDB();

      if (!user) {
        return new AuthenticationError(message);
      }

      const isValidPassword = await UserModel.comparePasswords(
        input.password,
        user.password
      );

      // Compare the passwords
      if (!isValidPassword) {
        return new AuthenticationError(message);
      }

      // Sign the JWT Tokens
      const { access_token, refresh_token } = signTokens(user);

      // Add the Tokens to the user context
      setCookie('access_token', access_token, {
        req,
        res,
        ...accessTokenCookieOptions,
      });
      setCookie('refresh_token', refresh_token, {
        req,
        res,
        ...refreshTokenCookieOptions,
      });
      setCookie('logged_in', 'true', {
        req,
        res,
        ...accessTokenCookieOptions,
        httpOnly: false,
      });

      return {
        status: 'success',
        access_token,
      };
    } catch (error: any) {
      errorHandler(error);
    }
  }

  // Get Authenticated User
  public async getUser({ req, res, deserializeUser }: IUserContext) {
    try {
      const user = await deserializeUser(req, res);
      return {
        status: 'success',
        user: {
          ...user,
          id: user?._id,
        },
      };
    } catch (error: any) {
      errorHandler(error);
    }
  }

  // Refresh Access Token
  public async refresh({ req, res }: IUserContext) {
    try {
      // Get the refresh token
      const { refresh_token } = req.cookies;

      // Validate the Refresh Token
      const decoded = verify<{ userId: string }>(refresh_token!, 'rt-public');

      if (!decoded) {
        throw new ForbiddenError('Could not refresh access token');
      }

      // Check if user exists and is verified
      const user = await UserModel.findById(decoded.userId).select('+verified');
      await disconnectDB();

      if (!user || !user.verified) {
        throw new ForbiddenError('Could not refresh access token');
      }

      // Sign the new access token
      const access_token = sign({ userId: user._id }, 'at-private', {
        expiresIn: `${accessTokenExpiresIn}m`,
      });

      // Send the access token cookie
      setCookie('access_token', access_token, {
        req,
        res,
        ...accessTokenCookieOptions,
      });
      setCookie('logged_in', 'true', {
        req,
        res,
        ...accessTokenCookieOptions,
        httpOnly: false,
      });

      return {
        status: 'success',
        access_token,
      };
    } catch (error) {
      errorHandler(error);
    }
  }

  // Logout User
  public async logout({ req, res }: IUserContext) {
    try {
      const user = await deserializeUser(req, res);
      // Logout user
      setCookie('access_token', '', { req, res, maxAge: -1 });
      setCookie('refresh_token', '', { req, res, maxAge: -1 });
      setCookie('logged_in', '', { req, res, maxAge: -1 });

      return true;
    } catch (error) {
      errorHandler(error);
    }
  }
}
