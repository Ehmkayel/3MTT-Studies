/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        lightPurple: 'hsl(254, 88%, 90%)',
        DarkPurple: 'hsl(256, 67%, 59%)',
        lightYellow: 'hsl(31, 66%, 93%)',
        darkYellow: 'hsl(39, 100%, 71%)',
        White: 'hsl(0, 0%, 100%)',
        Black: 'hsl(0, 0%, 7%)'
      },
      fontSize: {
        'base': '1.125rem', 
      },
    },
  },
  plugins: [],
}

