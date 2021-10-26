const defaultTheme = require('tailwindcss/defaultTheme')

const themeColors = {
  primary: {
    50: '#d9ffff',
    100: '#acfffb',
    200: '#7dfff6',
    300: '#4dfff3',
    400: '#26ffef',
    500: '#16e6d6',
    600: '#00b3a6',
    700: '#008077',
    800: '#004e47',
    900: '#001c19'
  },
  secondary: {
    50: '#ffe8f8',
    100: '#f1c2df',
    200: '#e49cc7',
    300: '#d775b0',
    400: '#ca4e99',
    500: '#b1357f',
    600: '#8a2863',
    700: '#631b48',
    800: '#3e0f2b',
    900: '#1b0211'
  }
}

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      colors: { ...themeColors },
      fontFamily: {
        sans: `"Poppins", ${defaultTheme.fontFamily.sans.join(',')}`,
        mono: `"IBM Plex Mono", ${defaultTheme.fontFamily.mono.join(',')}`
      },
      opacity: {
        12: '0.12',
        38: '0.38',
        87: '0.87'
      },
      rotate: {
        '-270': '270deg',
        15: '15deg',
        30: '30deg',
        60: '60deg',
        270: '270deg'
      },
      scale: {
        '-1': '-1'
      },
      zIndex: {
        '-1': -1,
        49: 49,
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        99: 99,
        999: 999,
        9999: 9999,
        99999: 99999
      },
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
        50: '12.5rem',
        90: '22.5rem'
      },
      /**
       * Extended spacing values for width and height utilities.
       * This way, we won't be adding these to other utilities
       * that use 'spacing' config to keep the file size
       * smaller by not generating useless utilities such as
       * p-1/4 or m-480.
       */
      extendedSpacing: {
        // Fractional values
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '9/10': '90%',

        // Bigger values
        100: '25rem',
        120: '30rem',
        128: '32rem',
        140: '35rem',
        160: '40rem',
        180: '45rem',
        192: '48rem',
        200: '50rem',
        240: '60rem',
        256: '64rem',
        280: '70rem',
        320: '80rem',
        360: '90rem',
        400: '100rem',
        480: '120rem'
      },
      height: (theme) => ({
        ...theme('extendedSpacing')
      }),
      minHeight: (theme) => ({
        ...theme('spacing'),
        ...theme('extendedSpacing')
      }),
      maxHeight: (theme) => ({
        ...theme('extendedSpacing'),
        none: 'none'
      }),
      width: (theme) => ({
        ...theme('extendedSpacing')
      }),
      minWidth: (theme) => ({
        ...theme('spacing'),
        ...theme('extendedSpacing'),
        screen: '100vw'
      }),
      maxWidth: (theme) => ({
        ...theme('spacing'),
        ...theme('extendedSpacing'),
        screen: '100vw'
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
