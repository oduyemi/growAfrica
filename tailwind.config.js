/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:['Riveruta', ...defaultTheme.fontFamily.sans]
      },
      colors:{
        pry: "#02B156",
        whi: "#F4F4F9 ",
        carton: "#F0F2D4",
        btn: "#02B156",
        butter: "#F5F9C7",
        rosepink: "#FDF3E3"
      }
    },
  },
  plugins: [],
}

