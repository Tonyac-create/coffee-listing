/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      "DMS": ['DM Sans', 'Inter']
    },
    fontSize: {
      "heading": "2rem",
      "body": "1rem",
      "label": "0.875rem",
      "smallText": "0.625rem",
      "priceText": "0.75rem"
    },
    colors: {
      "lightBlack": "#1B1D1F",
      "blackBG": "#111315",
      "gray": "#6F757C",
      "aqua": "#BEE3CC",
      "white": "#FEF7EE",
      "orange": "#F6C768",
      "pastelPink": "#ED735D"
    },
    extend: {},
  },
  plugins: [],
}

