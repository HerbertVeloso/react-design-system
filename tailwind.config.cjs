/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      transparent: "transparent",

      black: "#000",
      white: "#FFF",
      red: "#DC2626",

      cyan: {
        50: "#ECFEFF",
        100: "#CFFAFE",
        800: "#155E75",
      },

      teal: {
        300: "#5EEAD4",
        400: "#2DD4BF",
      },

      gray: {
        400: "#9CA3AF",
        600: "#4B5563",
      },
    },
    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      "2xl": 24,
      "3xl": 32,
    },
    extend: {
      fontFamily: {
        sans: "Comfortaa, sans-serif",
      },
    },
  },
  plugins: [],
};
