import { defineConfig } from '@pandacss/dev';
import { globalCss } from './theme/globals';
import { tokens } from './theme/tokens';

export default defineConfig({
  globalCss: globalCss,
  // Whether to use css reset
  preflight: true,
  hash: process.env.NODE_ENV === 'production',

  // Where to look for your css declarations
  include: ['./components/**/*.{ts,tsx,js,jsx}', './app/**/*.{ts,tsx,js,jsx}'],
  // Files to exclude
  exclude: [],
  // The output directory for your css system
  outdir: 'styled-system',
  jsxFramework: 'react',
  jsxFactory: 'panda',
  conditions: {
    extend: {
      dark: '.dark &, [data-theme="dark"] &',
      light: '.light &',
      supportsBackdrop:
        '@supports ((-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px)))',
    },
  },

  //  This allows only token values and prevents the use of custom or raw CSS values.
  // strictTokens: true,

  // Useful for theme customization
  theme: {
    extend: {
      breakpoints: {
        '3xs': '24em', // @media (min-width: 384px) { ... }
        '2xs': '30em', // @media (min-width: 480px) { ... }
        sx: '36em', // @media (min-width: 576px) { ... },
        sm: '40em', // @media (min-width: 640px) { ... }
        md: '48em', // @media (min-width: 768px) { ... }
        lg: '64em', // @media (min-width: 1024px) { ... }
        xl: '80em', // @media (min-width: 1280px) { ... }
        '2xl': '96em', // @media (min-width: 1536px) { ... }
        '3xl': '112.5em', // @media (min-width: 1800px) { ... }
      },

      tokens: tokens,
    },
  },
});
