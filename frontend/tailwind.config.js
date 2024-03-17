/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#ffcccc",
          200: "#ff9999",
          300: "#ff6666",
          400: "#ff3333",
          500: "#ff0000",
          600: "#cc0000",
          700: "#990000",
          800: "#660000",
          900: "#330000",
        },
        secondary: {
          100: "#f9fafa",
          200: "#f4f5f6",
          300: "#eef0f1",
          400: "#e9ebed",
          500: "#e3e6e8",
          600: "#b6b8ba",
          700: "#888a8b",
          800: "#5b5c5d",
          900: "#2d2e2e",
        },
        tertiary: {
          100: "#cce0f5",
          200: "#99c2eb",
          300: "#66a3e0",
          400: "#3385d6",
          500: "#0066cc",
          600: "#0052a3",
          700: "#003d7a",
          800: "#002952",
          900: "#001429",
        },
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
