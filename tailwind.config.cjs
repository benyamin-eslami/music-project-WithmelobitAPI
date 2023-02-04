/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sourcePro: ["Source Sans Pro", "sans-serif"],
    },

    extend: {
      colors: {
        secondary: "#18181d",
        chartbg: "#202026",
      },
    },
  },
  plugins: [],
};
