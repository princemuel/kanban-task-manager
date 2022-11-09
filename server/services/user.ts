import { AuthenticationError, ForbiddenError } from 'apollo-server-micro';
import { deleteCookie, setCookie } from 'cookies-next';
import { LoginData } from 'lib/schema/models';
import { disconnectDB } from 'server/config';
import { errorHandler } from 'server/middleware';
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

export class UserService {
  /**
   * @desc Create A New User
   * @method POST
   * @param input User
   * @returns Promise<ForbiddenError | { status: string; user: FlattenMaps<LeanDocument<User>>} | undefined>
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
   * @desc Get The Authenticated User
   * @method POST
   * @param input LoginData
   * @param context IUserContext
   * @returns Promise<User | undefined>;
   */
  public async login(input: LoginData, { req, res }: IUserContext) {
    try {
      const message = 'Invalid email or password';
      // Find a user by email
      const user = await findByEmail(input.email);
      await disconnectDB();

      if (!user) return new AuthenticationError(message);

      // Compare the passwords
      const isValidPassword = await UserModel.comparePasswords(
        input.password,
        user.password
      );

      if (!isValidPassword) return new AuthenticationError(message);

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

  /**
   * @desc Get The Authenticated User
   * @method POST
   * @param context IUserContext
   * @returns Promise<User | undefined>;
   */
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

  /**
   * @desc Refresh The Access Token
   * @method POST
   * @param context IUserContext
   * @returns Promise<{ status: string; access_token: string;} | undefined>
   */
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

  //
  /**
   * @desc Logout The Authenticated User
   * @method POST
   * @param context IUserContext
   * @returns Promise<true | undefined>
   */
  public async logout({ req, res }: IUserContext) {
    try {
      // Logout user
      deleteCookie('access_token', { req, res });
      deleteCookie('refresh_token', { req, res });
      deleteCookie('logged_in', { req, res });

      return true;
    } catch (error) {
      errorHandler(error);
    }
  }
}
