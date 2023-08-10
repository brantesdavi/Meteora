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
        secondaryColor: '#9353FF',
        primaryGrey: '#343A40'
      },
      fontSize:{
        'tablet': '13px',
        '32': '32px'
      },
      width:{
        '146': '146px',
        '160': '160px',
        '209': '209px',
        '322': '322px',
        '323': '323px',
        '330': '330px',
        '350': '350px',
        '304': '304px',
        '690': '690px',
        '1110': '1110px',

      },
      height:{
        '79': '79px'
      }
    },
  },
  plugins: [],
}

