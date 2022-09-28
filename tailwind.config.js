const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
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
