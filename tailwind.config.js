/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        ascent: "#00c476",
        "x-grey-I": "#575757",
        "x-grey-II": "#171717",
        "x-grey-III": "#303030",
        // ADD TO PLUGIN LATER
        primary: "#008FFF",
        secondary: "#A600FF",
        success: "#00C833",
        warning: "#E4C800",
        danger: "#FF0000",
        default: "#BBBBBB",
      },
    },
  },
  plugins: [],
};
