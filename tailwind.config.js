/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'idk': '#fa4733',
        'page-bg': "#fef2f0",
        'font-color': "#3c2421",
        'dark-brown': "#3b2522",
      },
      fontFamily: {
        Rounded: "Exo"
      },
    },
  },
  plugins: [],
}
);
