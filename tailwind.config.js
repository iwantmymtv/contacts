/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body: ["lexend"],
      glysa: ["glysa"],
    },
    extend: {
      colors: {
        "grey-10": "#414141",
        "grey-20": "#3C3C3C",
        "grey-30": "#373737",
        "grey-40": "#323232",
        "grey-50": "#2D2D2D",
        "grey-60": "#282828",
        "grey-70": "#232323",
        "grey-80": "#1E1E1E",
        "grey-90": "#191919",
        "grey-100": "#141414",
      },
    },
  },
  plugins: [],
}
