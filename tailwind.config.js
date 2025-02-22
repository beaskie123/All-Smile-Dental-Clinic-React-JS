/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['serif']
    },
    extend: {
      animation: {
        "spin-slow":"spin 1s linear infinite"
      }
    },
  },
  plugins: [],
}

