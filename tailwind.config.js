const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
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
