/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0C356A",
        secondary: "#FFC436",
        lightblue: "#068FFF",
        darkgray: "#DBE2EF",
        lightnavy: "#3F72AF",
        purple: "#C53678",
        narvik: "#EAE7DD",
        sorrelbrown: "#99775C",
      },
      screens: {
        xs: { max: "443px" },
      },
    },
  },
  plugins: [],
};
