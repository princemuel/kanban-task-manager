import { AuthenticationError, ForbiddenError } from 'apollo-server-micro';
import { getCookie, hasCookie } from 'cookies-next';
import { NextApiRequest, NextApiResponse } from 'next';
import { disconnectDB } from 'server/config';
import { errorHandler } from 'server/middleware';
import { UserModel } from 'server/models';
import { verify } from 'server/utilities';

const deserializeUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Get the access token
    let access_token;
    const authHeader = req.headers.authorization || req.headers.Authorization;

    // @ts-expect-error
    if (Boolean(authHeader) && authHeader?.startsWith('Bearer ')) {
      // @ts-expect-error
      access_token = authHeader?.split(' ')[1];
    } else if (hasCookie('access_token', { req, res })) {
      access_token = getCookie('access_token', { req, res });
    }

    if (!access_token)
      throw new AuthenticationError('No access token was found');

    // validate the access token
    const decoded = verify<{ userId: string }>(
      String(access_token),
      'at-public'
    );

    if (!decoded) throw new AuthenticationError('This access token is invalid');

    // Check if the user exists
    const user = await UserModel.findById(decoded.userId)
      .select('+verified')
      .lean(true);
    await disconnectDB();

    if (!user || !user.verified) {
      throw new ForbiddenError('This user does not exist');
    }
    return user;
  } catch (error: any) {
    errorHandler(error);
  }
};

export { deserializeUser };
