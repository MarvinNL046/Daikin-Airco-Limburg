/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "rgb(108,210,245)",  // Lighter shade
          DEFAULT: "rgb(68,200,245)", // Main color
          dark: "rgb(51,180,225)",    // Darker shade
        }
      },
      container: {
        center: true,
        padding: "2rem",
      },
    },
  },
  plugins: [],
}