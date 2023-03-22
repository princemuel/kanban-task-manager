import type { OptionsType } from "cookies-next/lib/types";
import { User, UserModel } from "server/models";

// Cookie Options
export const accessTokenExpiresIn = 15;
export const refreshTokenExpiresIn = 60;

export const cookieOptions: OptionsType = {
  httpOnly: true,
  sameSite: "lax",
  // domain: '/',
  // secure: true,
};

export const accessTokenCookieOptions = {
  ...cookieOptions,
  maxAge: accessTokenExpiresIn * 60,
  expires: new Date(Date.now() + accessTokenExpiresIn * 60 * 1000),
};

export const refreshTokenCookieOptions = {
  ...cookieOptions,
  maxAge: refreshTokenExpiresIn * 60,
  expires: new Date(Date.now() + refreshTokenExpiresIn * 60 * 1000),
};

export async function findByEmail(email: string): Promise<User | null> {
  return UserModel.findOne({ email }).select("+password");
}
