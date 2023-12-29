export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-preset-env": {
      features: {
        "has-pseudo-class": true,
      },
    },
  },
};
