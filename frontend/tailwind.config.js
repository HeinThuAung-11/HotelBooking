/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      fairplay: ["Playfair Display", "serif"],
    },
    colors: {
      text: "#050505",
      background: "#fafafa",
      primary: "#491098",
      secondary: "#fad1d4",
      accent: "#91e619",
    },
  },
  plugins: [],
};
