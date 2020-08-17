module.exports = {
  prefix: 'tw-',
  purge: [
    './src/**/*.vue',
    './src/**/*.js'
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors')
    }),
    borderColor: theme => ({
      default: theme('colors.font.20')
    }),
    borderRadius: {
      default: '4px',
      full: '9999px'
    },
    borderWidth: {
      default: '1px',
      2: '2px'
    },
    colors: {
      primary: {
        green: '#68bb59',
        'green-dark': '#1e5631',
        white: '#ffffff'
      },
      secondary: {
        magenta: '#e63041',
        yellow: '#e6e030',
        blue: '#3230e6'
      },
      font: {
        primary: '#333333',
        10: '#999999',
        20: '#dddddd'
      }
    },
    fontSize: {
      14: '14px',
      16: '16px',
      20: '20px',
      28: '28px',
      36: '36px'
    },
    height: {
      50: '50px',
      350: '350px',
      600: '600px',
      750: '750px',
      full: '100%',
      screen: '100vh'
    },
    margin: {
      5: '5px',
      10: '10px',
      15: '15px',
      20: '20px',
      30: '30px',
      40: '40px',
      50: '50px',
      70: '70px',
      100: '100px'
    },
    padding: {
      5: '5px',
      10: '10px',
      20: '20px',
      25: '25px',
      50: '50px',
      100: '100px'
    },
    translate: {
      0: '0',
      '-100%': '-100%'
    },
    width: {
      25: '25px',
      30: '30px',
      50: '50px',
      100: '100px',
      150: '150px',
      200: '200px',
      250: '250px',
      '10%': '10%',
      '30%': '30%',
      '60%': '60%',
      full: '100%'
    },
    zIndex: {
      header: '12'
    }
  },
  variants: {
    textDecoration: ['responsive', 'hover', 'focus', 'group-hover']
  },
  plugins: []
};
