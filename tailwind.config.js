/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1080px",
      "2xl": "1294px",
      "3xl": "1921px",
      "4xl": "2880px"
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      colors: {
        primary: {
          700: "#306da3",
          900: "#274c6c",
        },
        gray: {
          transparent: "#42566c66",
          400: "#73787c",
          800: "#393d40",
        },
      },
    },
  },
  plugins: [],
}