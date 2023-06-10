/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    //   typedRoutes: true,
    //   webVitalsAttribution: ['CLS', 'LCP'],
    turbo: {
      loaders: {
        '.svg': ['@svgr/webpack'],
      },
    },
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

module.exports = nextConfig;
