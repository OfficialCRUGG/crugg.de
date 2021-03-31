const colors = require("tailwindcss/colors")

module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
