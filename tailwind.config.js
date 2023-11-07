const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const { withTV } = require('tailwind-variants/transformer');

/** @type {import('tailwindcss').Config} */
module.exports = withTV({
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '3xs': '24em', // @media (min-width: 384px) { ... }
      '2xs': '30em', // @media (min-width: 480px) { ... }
      ...defaultTheme.screens,
    },
    extend: {
      borderRadius: {
        pill: '100vmax',
      },
      colors: {
        brand: {
          100: '#f4f7fd',
          200: '#e4ebfa', //lines-light
          300: '#a8a4ff',
          400: '#828fa3',
          500: '#635fc7',
          600: '#3e3f4e', //lines-dark
          700: '#2b2c37',
          800: '#20212c',
          900: '#000112',
        },
        accent: {
          100: '#ff9898',
          200: '#ea5555',
          300: '#49C4E5',
          400: '#8471F2',
          500: '#67E2AE',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        accent: ['var(--font-accent)', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        100: '0.5rem',
        200: '0.625rem',
        300: '0.75rem',
        400: '0.8125rem',
        500: '0.9375rem',
        600: '1.125rem',
        700: '1.5rem', //
      },
      lineHeight: {
        100: '0.5rem',
        200: '0.9375rem',
        300: '1.1875rem',
        400: '1.4375rem',
        500: '1.875rem',
      },
      letterSpacing: {
        100: '2.4px',
      },
      screens: {
        sx: '36em', // @media (min-width: 576px) { ... },
        sm: '40em', // @media (min-width: 640px) { ... }
        md: '48em', // @media (min-width: 768px) { ... }
        lg: '64em', // @media (min-width: 1024px) { ... }
        xl: '80em', // @media (min-width: 1280px) { ... }
        '2xl': '96em', // @media (min-width: 1536px) { ... }
        '3xl': '112.5em', // @media (min-width: 1800px) { ... }
      },

      cursor: {
        pointer:
          'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI6SURBVHgBnZRBaxNBGIYnu9uNSW1NlkgMVAl4Cyg5CAUPJlYFTyaX3CohePKUn5BcBA9CfkAvAf+B4sVLBC8eChv05ClKVaQIiUKjabOO77s7E8bUBpsXnrwzu9lvvvm+2bXFccWADRw1XlpWJpNZg+8ACV4kEomNVqtliSW0Am2mUik5HA5luVxmwEe5XC4pltBZ27a38/m8pHq9HoP54KI47ZbT6fQ52H1mRjE7jnFtK5vNrjJzhSuiui5cYA2Z3YN/HwwGYcBischgH8En8BLsKZ5w8VqtdiwoJ5bneeuO49zGeBdFD4OVSqVwu77vh1nS9VgF3SoUCq4ZiJObzAgcgK8sPtVsNqWWvka1221d011wgckI9cPJ5263K7k9NkDXbZH4Xzz3DRRVLcPDycmYBTe6KPV8kUR0Hm+AM0JFvA4+6DpRnU5nNq5UKn85A5jBUOdb8ITO7CrY4dZ0F+dX/5cbmd0Fq6zXb7CPI/F6NBq9bTQa4n/V7/dpI2QmZxfZWugKhm3eNLdI6S5q1/VkozB+BjZB3Dwe6+COZVlP4Ufs7CLV63UGeg8egksieiNmspPJZA6+DZ6DX/MZVqvVMDt1JA6w8GP4NV38ebnxePwy/IEK+FMVWHMIhmr8BnWuwj2hDqwzF+xwMpnsIeCr6XQ6DoJgIKIvhhuLxaZIjm/IEZgAH/ffwX+IqIknvvU8e+fBBlb38JALDxBwrLKTWGwf/gWMzcKfJP3pXjGuBcqlyjAwH/gDZjDKatJ5fJYAAAAASUVORK5CYII="), pointer;',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@headlessui/tailwindcss')({ prefix: 'hui' }),
    require('tailwindcss-animate'),

    plugin(function ({ addUtilities }) {
      addUtilities({
        '.grid-cols-auto': {
          '--min-column-size': '15rem',
          gridTemplateColumns:
            'repeat(auto-fit, minmax(min(var(--min-column-size), 100%), 1fr))',
        },
      });
    }),
  ],
});
