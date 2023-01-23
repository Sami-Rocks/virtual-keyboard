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
        accent: "#22A39F",
        black: "#222222",
        white: "#F2F0EA",
        light_grey: "#F3EFE0",
        dark_grey: "#434242",
        red: "#F14A0E",
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