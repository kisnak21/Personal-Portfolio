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
        primary: '#251B37',
        dark: '#372948'
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}
