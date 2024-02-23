/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        '100%': '100% 100%'
      },
      fontFamily: {
        'poppins': 'Poppins, sans-serif',
      },
      screens: {
        '992': '992px',
        '910': '910px',
        '920': '920px',
        '576': '576px',
        '520': '520px',
        '450': '450px',
        '1440': '1440px',
        '1537': '1537px',
        '420': '420px',
        '700': '700px',
        '1350': '1350px',
        '1250': '1250px',
        '1200': '1200px',
        '1150': '1150px',
        '470': '470px',
        '350': '350px',
        '390': '390px',
      }
    },
  },
  plugins: [],
}