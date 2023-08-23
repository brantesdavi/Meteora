/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans'],
      },
      screens:{
        'xs': '415px',
      },
      colors:{
        primaryColor: '#DAFF01',
        secondaryColor: '#9353FF',
        primaryGrey: '#343A40',
        secondaryGrey: '#ADB5BD',
        radioBorder: '#DEE2E6'
      },
      fontSize:{
        'tablet': '13px',
        '32': '32px'
      },
      width:{
        '13': '13px',
        '146': '146px',
        '160': '160px',
        '209': '209px',
        '318': '318',
        '322': '322px',
        '323': '323px',
        '330': '330px',
        '350': '350px',
        '304': '304px',
        '319': '319px',
        '690': '690px',
        '700': '700px',
        '1110': '1110px',

      },
      height:{
        '13': '13px',
        '54': '54px',
        '56': '56px',
        '74': '74px',
        '79': '79px',
        '301': '301px',
        '474': '474px',
      },
      padding:{
        '17': '17px',
        '23': '23px'
      },
      minWidth:{
        '320': '320px',
        '100vw': '100vw',

      },
      minHeight: {
        '100vh': '100vh',
      },
      opacity: {
        '50': '0.5',
      },
      zIndex: {
        '11': '11',
      },
      margin:{

      }
    },
  },
  plugins: [],
}

