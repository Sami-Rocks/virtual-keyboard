/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#E50102",
        black: "#333333",
        white: "#ffffff",
        light_grey: "#F8F8F8",
        light_grey_text: "#A5A5A5",
        grey_text: "#8390B2",
        label_text: "#7483A9",
        dark_grey_text: "#333C52",
        border: "#E3E6ED",
        icon_background: "#C3C9DA",
        faded_red: "#FFECEB",
        faded_yellow: "#FFF3E6",
        faded_primary: "#b8dcff",
        red: "#F14A0E",
        peach: "#FF8168",
        yellow: "#FFAB4C",
        green: "#54C3A1",
        faded_green: "#E1F4EE",
        transparent: "rgba(7, 13, 43, 0.75)",
      },
      fontFamily: {
        sans: ["Raleway", "sans-serif"]
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
}