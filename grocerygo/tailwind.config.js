/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'main-background': '#fff4ec',
        'main-green': '#355D4E',
        'main-red': '#AC3333'
      }
    },
  },
  plugins: [],
}
