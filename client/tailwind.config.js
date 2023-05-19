/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        clash: ["Clash Display", "sans-serif"],
      },
      colors: {
        Primary: "#2A254B",
        Secondary: "#505977",
        "light-gray": "#F9F9F9",
        "light-gray-100": "#726E8D",
        "Dark-Primary": "#22202E"
      },
    },
  },
  plugins: [],
};
