/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#112D4E',
        dark: '#3F72AF',
        secondary: '#153462'
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}
