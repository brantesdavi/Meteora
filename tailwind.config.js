/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens:{
        'xs': '415px',
      },
      colors:{
        primaryColor: '#DAFF01',
        primaryGrey: '#343A40'
      },
      fontSize:{
        'tablet': '13px'
      }
    },
  },
  plugins: [],
}
