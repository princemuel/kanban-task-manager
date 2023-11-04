import { env } from '@/env.mjs';

export const getBaseUrl = () => {
  let url =
    env.NEXT_PUBLIC_VERCEL_URL ?? `http://localhost:${env.PORT || 3000}/`;
  url = url.includes('http') ? url : `https://${url}`;
  return url.charAt(url.length - 1) === '/' ? url : `${url}/`;
};
