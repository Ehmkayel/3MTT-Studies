/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        moderateViolet: 'hsl(263, 55%, 52%)',
        grayishBlue: 'hsl(217, 19%, 35%)',
        blackishBlue: 'hsl(219, 29%, 14%)',
        white: 'hsl(0, 0%, 100%)',
        lightGray: 'hsl(0, 0%, 81%)',
        lightGrayishBlue: 'hsl(210, 46%, 95%)'
      },
      fontSize: {
        'base': '0.813rem'
      }
    },
  },
  plugins: [],
}

