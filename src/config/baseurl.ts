import { envVars } from "@/env.dto.mjs";

export const getBaseUrl = () => {
  let url =
    envVars.NEXT_PUBLIC_VERCEL_URL ??
    `http://localhost:${process.env.PORT || 3000}/`;
  url = url.includes("http") ? url : `https://${url}`;
  return url.charAt(url.length - 1) === "/" ? url : `${url}/`;
};
