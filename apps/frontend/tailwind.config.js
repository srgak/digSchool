const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,ts}"
  ],
  separator: '_',
  theme: {
    container: {
      center: true,
      padding: '10px'
    },
    screens: {
      'laptop': {
        'max': '1024px'
      },
      'tablet-big': {
        'max': '992px'
      },
      'tablet': {
        'max': '768px'
      },
      'mobile': {
        'max': '576px'
      }
    },
    spacing: {
      '0': '0',
      '5': '5px',
      '10': '10px',
      '15': '15px',
      '20': '20px',
      '25': '25px',
      '30': '30px',
      '35': '35px',
      '40': '40px',
      '45': '45px',
      '50': '50px',
      '55': '55px',
      '60': '60px',
      '65': '65px',
      '70': '70px',
      '75': '75px',
      '80': '80px',
      '85': '85px',
      '90': '90px',
      '95': '95px',
      '100': '100px',
      'full': '100%',
      'half': '50%'
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      'active-1': '#F22738',
      'active-2': '#00010D',
      'active-3': '#133840',
      'active-4': '#FEFFFF',
      'active-5': '#8FBBC4'
    },
    fontSize: {
      '14': '14px',
      '16': '16px',
      '18': '18px',
      '24': '24px',
      'banner-title': '60px'
    },
    borderRadius: {
      'none': '0',
      DEFAULT: '20px',
      'circle': '50%',
      '10': '10px'
    },
    extend: {},
  },
  plugins: [
    plugin(function({addComponents}){
      addComponents({
        '.button': {
          display: 'inline-block',
          padding: '10px 20px',
          borderRadius: '10px',
          border: '1px solid hsla(0,0%,100%,.5)',
          transition: '0.3s',
          '&:disabled': {
            opacity: 0.7,
            'pointer-events': 'none'
          }
        },
        '.button-active': {
          '&:hover': {
            backgroundColor: '#F22738',
            borderColor: '#F22738'
          }
        },
        '.button-link-active': {
          backgroundColor: '#F22738',
          borderColor: '#F22738'
        }
      })
    })
  ]
}

