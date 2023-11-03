import db from '@/app/db.server';
import { env } from '@/env.mjs';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { HttpError } from 'http-errors-enhanced';
import { AuthOptions, Session, TokenSet, getServerSession } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

const {
  GITHUB_ID,
  GITHUB_SECRET,
  GOOGLE_ID,
  GOOGLE_SECRET,
  NEXTAUTH_SECRET,
  NODE_ENV,
} = env;

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const options: AuthOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    GithubProvider({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
      authorization: {
        params: {
          access_type: 'offline',
          prompt: 'consent',
          response_type: 'code',
        },
      },
    }),
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],

  callbacks: {
    async session({ session, user }) {
      const [google] = await db.account.findMany({
        where: { userId: user.id, provider: 'google' },
      });

      if (google?.expires_at && google?.expires_at * 1000 < Date.now()) {
        // If the access token has expired, try to refresh it
        try {
          const response = await fetch('https://oauth2.googleapis.com/token', {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
              client_id: GOOGLE_ID,
              client_secret: GOOGLE_SECRET,
              grant_type: 'refresh_token',
              refresh_token: google.refresh_token || '',
            }),
            method: 'POST',
          });

          const tokens: TokenSet = await response.json();
          if (!response.ok) throw tokens;

          await db.account.update({
            data: {
              access_token: tokens.access_token,
              expires_at: Math.floor(
                Date.now() / 1000 + Number(tokens.expires_in)
              ),
              refresh_token: tokens.refresh_token ?? google.refresh_token,
            },
            where: {
              provider_providerAccountId: {
                provider: 'google',
                providerAccountId: google.providerAccountId,
              },
            },
          });
        } catch (error) {
          console.error('Error refreshing access token', error);
          session.error = 'RefreshAccessTokenError';
        }
      }
      return session;
    },
  },

  pages: {
    // signIn: '/',
    // signIn: '/auth/signin',
    // signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },

  session: {
    strategy: 'database',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 1 * 24 * 60 * 60, // 1 hours
  },

  secret: NEXTAUTH_SECRET,
  debug: NODE_ENV === 'development',
};

/**
 * An function wrapper for `getServerSession`
 * so that you don't need to import the `options` in every file.
 * The getAuthSession function retrieves the authentication session
 * and by default, enforces session validation.
 * However, if you provide the 'SkipValidation' parameter,
 * it skips the validation step and returns the session as is,
 * to enable handling the validation yourself
 * @see https://next-auth.js.org/configuration/nextjs
 */

export async function getAuthSession(
  param?: 'SkipValidation'
): Promise<Session | null> {
  const session = await getServerSession(options);
  if (param === 'SkipValidation') return session;
  if (!session) {
    throw new HttpError(401, 'Invalid user session. Please login again');
  }
  return session;
}
