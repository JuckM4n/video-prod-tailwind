/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/*.html"],
  theme: {
    extend: {
      colors: {
        'orange': '#FF5300',
        'black': '#17191C',
      },
      backgroundImage: {
        'bg': 'url(../../src/img/bg.png)',
        'rec': 'url(../../src/img/rec.png)',
        'top-line': 'url(../../src/img/top-line.png)'
      },
      spacing: {
        '5px': '5px',
        '15px': '15px',
        '55px': '55px',
      },
    },
  },
  plugins: [],
}

