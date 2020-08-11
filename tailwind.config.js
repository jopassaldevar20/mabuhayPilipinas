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
      50: '50px'
    },
    margin: {
      5: '5px',
      10: '10px',
      20: '20px',
      40: '40px'
    },
    padding: {
      50: '50px'
    },
    width: {
      50: '50px',
      100: '100px',
      '10%': '10%',
      '30%': '30%',
      '60%': '60%',
      full: '100%'
    }
  },
  variants: {},
  plugins: []
};
