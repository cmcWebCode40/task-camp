/** @type {import('tailwindcss').Config} */

// const colors = require("./libs/constants/theme")
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './navigations/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        black:'#000'
      }
    },
  },
  plugins: [],
};
