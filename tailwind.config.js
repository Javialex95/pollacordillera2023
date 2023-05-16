/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      crema: "#FBF2E6",
      negro: "#222221",
      azul: "#85E8FB",
      rosado: "#ECB5F3",
      naranja: "#DD5226",
      amarillo: "#F7E33E",
      verde: "#5A9E29",
      rojo: "#CD0E24",
      white: "#FBF2E6",
      // ...
    },
  },
  plugins: [],
};
