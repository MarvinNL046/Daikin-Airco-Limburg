/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(68,200,245)",
        "primary-dark": "rgb(51,180,225)",
      },
      container: {
        center: true,
        padding: "2rem",
      },
    },
  },
  plugins: [],
}