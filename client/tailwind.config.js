const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    borderRadius: {
      ...defaultTheme.borderRadius,
      pill: '100vmax',
    },

    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      neutral: '#ffffff',
      primary: {
        100: '#f4f7fd',
        200: '#e4ebfa',
        300: '#a8a4ff',
        400: '#828fa3',
        500: '#635fc7',
        600: '#3e3f4e',
        700: '#2b2c37',
        800: '#20212c',
        900: '#000112',
      },
      accent: {
        100: '#ff9898',
        200: '#ea5555',
      },
    },

    fontSize: {
      100: '0.5rem',
      200: '0.625rem',
      300: '0.75rem',
      400: '0.8125rem',
      500: '0.9375rem',
      600: '1.125rem',
      700: '1.5rem',
      800: '1.875rem',
      900: '2.25rem',
    },

    lineHeight: {
      100: '0.8rem',
      200: '10px',
      300: '10px',
      400: '1.25rem',
      500: '1.5rem',
      600: '1.5rem',
      700: '1.5rem',
      800: '1.5rem',
      900: '1.5rem',
    },

    screens: {
      xs: '30em', // => @media (min-width: 480px) { ... }
      ...defaultTheme.screens,
    },

    extend: {
      screens: {
        sm: '40em', // => @media (min-width: 640px) { ... }
        md: '48em', // => @media (min-width: 768px) { ... }
        lg: '64em', // => @media (min-width: 1024px) { ... }
        xl: '80em', // => @media (min-width: 1280px) { ... }
        '2xl': '96em', // => @media (min-width: 1536px) { ... }
      },
    },

    fontFamily: {
      sans: ['Plus Jakarta Sans', 'sans-serif'],
    },
  },
  plugins: [],
};
