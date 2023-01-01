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
        sm: "40em", // => @media (min-width: 640px) { ... }
        md: "48em", // => @media (min-width: 768px) { ... }
        lg: "64em", // => @media (min-width: 1024px) { ... }
        xl: "80em", // => @media (min-width: 1280px) { ... }
        "2xl": "96em", // => @media (min-width: 1536px) { ... }
      },

      gridTemplateColumns: {
        // arbitrary values
        "fill-16": "repeat(auto-fill, minmax(4rem, 1fr))",
        "fill-20": "repeat(auto-fill, minmax(5rem, 1fr))",
        "fit-big": "repeat(auto-fit, minmax(25rem, 1fr))",
        // etc.
      },
    },
  },
  plugins: [
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
        ".w-full-shadow": {
          boxShadow: "0 0 0 100vmax currentColor, 0 0 2rem currentColor",
          clipPath: "inset(0 -100vmax)",
        },
        ".h-container": {
          "--max-width": "111rem",
          "--container-padding": "1.6rem",

          width: "min(var(--max-width), 100% - (var(--container-padding) * 2))",
          marginInline: "auto",
        },
      });
    }),
  ],
};
