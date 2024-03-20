/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: { 
    extend: {
      colors: {
        white: '#FFFFFF',
        'light-green': '#00DD00',
        'medium-green': '#00B200',
        'light-grey': '#F2F2F2',
        'light-black': '#1E1E1E',
        black: '#000000',
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
}