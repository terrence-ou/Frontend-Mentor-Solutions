/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      dark: {
        300: "#3A3A3A",
        500: "#2D2D2D",
        700: "#1F1F1F",
        900: "#050505",
      },
      gray: {
        300: "#F4F4F4",
        500: "#E9E9E9",
        700: "#757575",
      },
      white: "#FFFFFF",
      "light-purple": "#A445ED",
      "red-tomato": "#FF5252",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Lora", "serif"],
      mono: ["Inconsolata", "monospace"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      spacing: {
        "page-width": "737px",
        "header-height": "36.5px",
      },
    },
  },
  plugins: [],
};
