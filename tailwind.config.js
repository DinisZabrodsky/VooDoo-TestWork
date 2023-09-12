/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      colors:{
        'main': '#FCF7E6'
      },
      screens: {
        'tb': '768px',
        'xl': '1280px'
      }
    },
  },
  plugins: [],
}

