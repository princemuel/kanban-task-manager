import jwt, { SignOptions } from 'jsonwebtoken';
import { User } from 'server/models';
import { accessTokenExpiresIn, refreshTokenExpiresIn } from './constants';
import { toBase64, toUtf8 } from './functions';

export const sign = (
  payload: Object,
  key: 'at-private' | 'rt-private',
  options?: SignOptions
) => {
  const access_token = toBase64(process.env.ACCESS_TOKEN_PRIVATE_KEY!);
  const refresh_token = toBase64(process.env.REFRESH_TOKEN_PRIVATE_KEY!);

  const privateKey =
    key === 'at-private' ? toUtf8(access_token) : toUtf8(refresh_token);

  return jwt.sign(payload, privateKey, {
    ...(options ?? {}),
    algorithm: 'RS256',
  });
};

export const verify = <T>(
  token: string,
  key: 'at-public' | 'rt-public'
): T | null => {
  const access_token = toBase64(process.env.ACCESS_TOKEN_PUBLIC_KEY!);
  const refresh_token = toBase64(process.env.REFRESH_TOKEN_PUBLIC_KEY!);

  const publicKey =
    key === 'at-public' ? toUtf8(access_token) : toUtf8(refresh_token);

  try {
    return jwt.verify(token, publicKey, {
      algorithms: ['RS256'],
    }) as T;
  } catch (error) {
    return null;
  }
};

export function signTokens(user: User) {
  //@ts-expect-error
  const userId: string = user?._id?.toString() ?? user?.id?.toString();
  const access_token = sign({ userId }, 'at-private', {
    expiresIn: `${accessTokenExpiresIn}m`,
  });

  const refresh_token = sign({ userId }, 'rt-private', {
    expiresIn: `${refreshTokenExpiresIn}m`,
  });

  return { access_token, refresh_token };
}
