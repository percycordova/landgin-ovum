const defaultTheme = require("tailwindcss/defaultTheme");

const themeColors = {
  primary: {
    50: "#d9ffff",
    100: "#acfffb",
    200: "#7dfff6",
    300: "#4dfff3",
    400: "#26ffef",
    500: "#16e6d6",
    600: "#00b3a6",
    700: "#008077",
    800: "#004e47",
    850: " #1B3C33",
    900: "#001c19",
    950: "#173D35",
  },
  secondary: {
    50: "#ffe8f8",
    100: "#f1c2df",
    200: "#e49cc7",
    300: "#d775b0",
    400: "#ca4e99",
    500: "#b1357f",
    600: "#B4038F",
    650: "#AC1888",
    700: "#631b48",
    800: "#3e0f2b",
    900: "#1b0211",
  },
  gray: {
    100: "#F4F5F7", // fondo
    500: "#c4c4c4",
    600: "#4E5057",
    800: " #263A43",
  },
  pink: {
    700: "#B4038F",
  },
  green: {
    100: "#D5EFCA", // fondo horario
    200: "#9DCD8A", // fondo de card
    300: "#6CBE4C", // title
    400: "#6ABF4A", // border bottom de card
    450: "#6F9D3B",
    500: "#355258",
    800: "#173D35", // fondo de card
    900: "#163027",
  },
  blue: {
    300: "#B5D2DB", // fondo horario
    500: "#007598", // fondo de card
  },
  yellow: {
    300: "#F3EB5F", // fondo de card
    400: "#F3DA4C",
    700: "#FFC60B", // fondo de card
    800: "#FFC700",
  },
  brown: {
    300: "#D9CAA5", // fondo horario
  },
  purple: {
    300: "#DABEDC", // fondo horario
  },
};

module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      colors: { ...themeColors },
      fontFamily: {
        // sans: `"Poppins", ${defaultTheme.fontFamily.sans.join(",")}`,
        sans: ["Open Sans"],
        mono: `"IBM Plex Mono", ${defaultTheme.fontFamily.mono.join(",")}`,
      },
      opacity: {
        12: "0.12",
        38: "0.38",
        87: "0.87",
      },
      rotate: {
        "-270": "270deg",
        15: "15deg",
        30: "30deg",
        60: "60deg",
        270: "270deg",
      },
      scale: {
        "-1": "-1",
      },
      zIndex: {
        "-1": -1,
        49: 49,
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        99: 99,
        999: 999,
        9999: 9999,
        99999: 99999,
      },
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
        50: "12.5rem",
        90: "22.5rem",
      },
      margin: {
        "-100": "-400px",
        "-110": "-440px",
        "-120": "-480px",
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "2.5xl": ["1.68rem", { lineHeight: "2.5rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "4.5xl": ["2.56rem", { lineHeight: "3rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
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
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "9/10": "90%",

        // Bigger values
        100: "25rem",
        120: "30rem",
        128: "32rem",
        140: "35rem",
        160: "40rem",
        180: "45rem",
        192: "48rem",
        200: "50rem",
        240: "60rem",
        256: "64rem",
        280: "70rem",
        320: "80rem",
        360: "90rem",
        400: "100rem",
        480: "120rem",
      },
      height: (theme) => ({
        ...theme("extendedSpacing"),
        73: "18.8rem",
        74: "19rem",
        75:"20.9rem"
      }),
      minHeight: (theme) => ({
        ...theme("spacing"),
        ...theme("extendedSpacing"),
      }),
      maxHeight: (theme) => ({
        ...theme("extendedSpacing"),
        none: "none",
      }),
      width: (theme) => ({
        ...theme("extendedSpacing"),
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "5/13": "47%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        25: "6.25rem",
        26: "6.5rem",
        70: "17rem",
        73: "18.625rem",
        100: "20rem",
        115:"29.3rem",
        140: "37rem",
        200: "55rem",
        250: "62.5rem",
        full: "100%",
        screen: "100vw",
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
      }),
      minWidth: (theme) => ({
        ...theme("spacing"),
        ...theme("extendedSpacing"),
        screen: "100vw",
      }),
      maxWidth: (theme) => ({
        ...theme("spacing"),
        ...theme("extendedSpacing"),
        screen: "100vw",
        115:"29.3rem",
      }),
      boxShadow: {
        "3xl": "-1px 1px 11px -1px rgba(0,0,0,0.51)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
