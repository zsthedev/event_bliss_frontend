/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        crimson: "#DC143C",
        gray: "#C7C7C7",
        white: "#FFFFFF",
        dark_gray: "#808080",
        black: "#212121",
        light_bg: "#F1F1F1",
        light_crimson: "#FFF0F2",
      },

      fontFamily: {
        "flv": ['flv'],
        "poppins": ['poppins'],
      }
    },
  },
  plugins: [],
};
