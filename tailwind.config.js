/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["docs/*.html"],
  theme: {
    extend: {
      colors: {
        'orange': '#FF5300',
        'black': '#17191C',
      },
      backgroundImage: {
        'bg': 'url(../../docs/img/bg.png)',
        'rec': 'url(../../docs/img/rec.png)',
        'top-line': 'url(../../docs/img/top-line.png)'
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

