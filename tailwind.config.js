const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
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

    fontFamily: {
      sans: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
    },

    fontSize: {
      100: '0.8rem',
      200: '1rem',
      300: '1.2rem',
      400: '1.3rem',
      500: '1.5rem',
      600: '1.8rem',
      700: '2.4rem', //
      800: '1.875rem',
      900: '2.25rem',
    },

    lineHeight: {
      100: '0.8rem',
      200: '1.5rem',
      300: '1.9rem',
      400: '2.3rem',
      500: '3rem',
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

      gridTemplateColumns: {
        // arbitrary values
        'fill-16': 'repeat(auto-fill, minmax(4rem, 1fr))',
        'fill-20': 'repeat(auto-fill, minmax(5rem, 1fr))',
        'fit-big': 'repeat(auto-fit, minmax(25rem, 1fr))',
        // etc.
      },
    },
  },
  plugins: [],
};
