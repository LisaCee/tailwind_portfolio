// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        gray: colors.trueGray,
        violet: colors.violet,
        heather: '#c4b5fd',
        cyan: colors.cyan

    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}