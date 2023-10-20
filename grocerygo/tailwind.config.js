/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors') 
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    extend: {
      colors: {
        'main-background': '#ffffff',
        'main-green': '#355D4E',
        'main-red': '#AC3333'
      },
      fontFamily: {
        primary: "Poppins"
      }
    },
  },
  plugins: [],
}