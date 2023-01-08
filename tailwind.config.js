const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    borderRadius: {
      ...defaultTheme.borderRadius,
      pill: "100vmax",
      100: "0.8rem",
      200: "0.6rem",
      300: "0.4rem",
    },

    colors: {
      current: "currentColor",
      transparent: "transparent",
      inherit: "inherit",
      neutral: { 100: "#ffffff", 900: "#000000" },
      brand: {
        100: "#f4f7fd",
        200: "#e4ebfa",
        300: "#a8a4ff",
        400: "#828fa3",
        500: "#635fc7",
        600: "#3e3f4e",
        700: "#2b2c37",
        800: "#20212c",
        900: "#000112",
      },
      accent: {
        100: "#ff9898",
        200: "#ea5555",
        300: "#49C4E5",
        400: "#8471F2",
        500: "#67E2AE",
      },
    },

    fontFamily: {
      sans: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
    },

    fontSize: {
      100: "0.8rem",
      200: "1rem",
      300: "1.2rem",
      400: "1.3rem",
      500: "1.5rem",
      600: "1.8rem",
      700: "2.4rem", //
    },

    lineHeight: {
      100: "0.8rem",
      200: "1.5rem",
      300: "1.9rem",
      400: "2.3rem",
      500: "3rem",
    },
    letterSpacing: {
      100: "2.4px",
      ...defaultTheme.letterSpacing,
    },

    screens: {
      s: "20em", // => @media (min-width: 320px) { ... }
      xs: "30em", // => @media (min-width: 480px) { ... }
      sm: "36em", // => @media (min-width: 576px) { ... }
      sx: "40em", // => @media (min-width: 640px) { ... }
      md: "45em", // => @media (min-width: 720px) { ... }
      lg: "64em", // => @media (min-width: 1024px) { ... }
      xl: "80em", // => @media (min-width: 1280px) { ... }
      xxl: "96em", // => @media (min-width: 1280px) { ... }
      xxxl: "112.5em", // => @media (min-width: 1800px) { ... }
    },

    extend: {
      cursor: {
        fancy:
          'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI6SURBVHgBnZRBaxNBGIYnu9uNSW1NlkgMVAl4Cyg5CAUPJlYFTyaX3CohePKUn5BcBA9CfkAvAf+B4sVLBC8eChv05ClKVaQIiUKjabOO77s7E8bUBpsXnrwzu9lvvvm+2bXFccWADRw1XlpWJpNZg+8ACV4kEomNVqtliSW0Am2mUik5HA5luVxmwEe5XC4pltBZ27a38/m8pHq9HoP54KI47ZbT6fQ52H1mRjE7jnFtK5vNrjJzhSuiui5cYA2Z3YN/HwwGYcBischgH8En8BLsKZ5w8VqtdiwoJ5bneeuO49zGeBdFD4OVSqVwu77vh1nS9VgF3SoUCq4ZiJObzAgcgK8sPtVsNqWWvka1221d011wgckI9cPJ5263K7k9NkDXbZH4Xzz3DRRVLcPDycmYBTe6KPV8kUR0Hm+AM0JFvA4+6DpRnU5nNq5UKn85A5jBUOdb8ITO7CrY4dZ0F+dX/5cbmd0Fq6zXb7CPI/F6NBq9bTQa4n/V7/dpI2QmZxfZWugKhm3eNLdI6S5q1/VkozB+BjZB3Dwe6+COZVlP4Ufs7CLV63UGeg8egksieiNmspPJZA6+DZ6DX/MZVqvVMDt1JA6w8GP4NV38ebnxePwy/IEK+FMVWHMIhmr8BnWuwj2hDqwzF+xwMpnsIeCr6XQ6DoJgIKIvhhuLxaZIjm/IEZgAH/ffwX+IqIknvvU8e+fBBlb38JALDxBwrLKTWGwf/gWMzcKfJP3pXjGuBcqlyjAwH/gDZjDKatJ5fJYAAAAASUVORK5CYII="), pointer;',
      },

      gridTemplateAreas: {
        desk: ["header header", "aside main"],
        // ipad: ["header header", "copy social"],
      },

      gridTemplateColumns: {
        // arbitrary values
        "fill-16": "repeat(auto-fill, minmax(4rem, 1fr))",
        "fill-20": "repeat(auto-fill, minmax(5rem, 1fr))",
        "fit-big": "repeat(auto-fit, minmax(25rem, 1fr))",
        // etc.
      },

      boxShadow: {
        task: "0px 4px 6px rgba(54, 78, 126, 0.101545)",
        scrollbar:
          "inset 2px 2px 2px rgb(0 0% 0% / 0.5%), inset -2px -2px 2px rgb(0 0 0 / 0.5%)",
      },
    },
  },
  plugins: [
    require("@savvywombat/tailwindcss-grid-areas"),
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("@headlessui/tailwindcss")({ prefix: "ui" }),
  ],
};
