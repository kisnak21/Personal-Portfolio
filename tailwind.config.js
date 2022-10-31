/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#0891b2",
        dark: "#0f172a",
        secondary: "#71717a",
        light: "#e0fbfc",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
