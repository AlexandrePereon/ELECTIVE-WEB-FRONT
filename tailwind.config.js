/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: { 
    extend: {
      colors: {
        base: '#00000',
        secondary: '#1111',
        blue: '#1111',
        'medium-green': '#1111',
        'light-grey': '#1111',
        'light-black': '#1111',
        black: '#1111',
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
}