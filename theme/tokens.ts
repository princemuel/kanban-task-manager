import { defineTokens } from '@pandacss/dev';

export const tokens = defineTokens({
  radii: {
    pill: { value: '100vmax' },
  },
  colors: {
    current: { value: 'currentColor' },
    black: { value: '#000' },
    white: { value: '#fff' },
    brand: {
      100: { value: '#f4f7fd' },
      200: { value: '#e4ebfa' }, //lines-light
      300: { value: '#a8a4ff' },
      400: { value: '#828fa3' },
      500: { value: '#635fc7' },
      600: { value: '#3e3f4e' }, //lines-dark
      700: { value: '#2b2c37' },
      800: { value: '#20212c' },
      900: { value: '#000112' },
    },
    accent: {
      100: { value: '#ff9898' },
      200: { value: '#ea5555' },
      300: { value: '#49C4E5' },
      400: { value: '#8471F2' },
      500: { value: '#67E2AE' },
    },
  },
  fonts: {
    sans: {
      value: 'var(--font-sans), system-ui, sans-serif',
    },
  },
  fontSizes: {
    100: { value: '0.5rem' },
    200: { value: '0.625rem' },
    300: { value: '0.75rem' },
    400: { value: '0.8125rem' },
    500: { value: '0.9375rem' },
    600: { value: '1.125rem' },
    700: { value: '1.5rem' }, //
  },
  lineHeights: {
    100: { value: '0.5rem' },
    200: { value: '0.9375rem' },
    300: { value: '1.1875rem' },
    400: { value: '1.4375rem' },
    500: { value: '1.875rem' },
  },
  letterSpacings: {
    100: { value: '2.4px' },
  },
});
