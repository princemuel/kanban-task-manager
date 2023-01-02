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
      default: "0.8rem",
    },

    colors: {
      current: "currentColor",
      transparent: "transparent",
      inherit: "inherit",
      neutral: { 100: "#ffffff", 900: "#000000" },
      primary: {
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
      xs: "30em", // => @media (min-width: 480px) { ... }
      ...defaultTheme.screens,
    },

    extend: {
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
    plugin(function ({ addComponents, addUtilities, theme }) {
      addComponents({
        ".btn": {
          display: "inline-flex",
          alignItems: "center",
          gap: "1rem",
          paddingBlock: "1.5rem",
          paddingInline: "2.75rem",
          borderRadius: theme("borderRadius.pill"),
          fontSize: theme("fontSize.400"),
          lineHeight: theme("lineHeight.200"),
          letterSpacing: theme("letterSpacing.200"),
        },
      });
      addUtilities({
        ".icon--svg": {
          fill: "currentColor",
        },
      });
    }),
  ],
};
