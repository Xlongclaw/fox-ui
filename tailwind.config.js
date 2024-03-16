/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors:{
        "ascent":'#00c476',
        "x-grey-I":"#575757",
        "x-grey-II":"#171717",
        "x-grey-III":"#303030",
      }
    },
  },
  plugins: [],
}

