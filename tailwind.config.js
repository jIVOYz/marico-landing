/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      flex: {
        100: "0 0 100%",
        50: "0 0 50%",
      },
      translate: {
        minus100: "-100%",
      },
    },

    gridTemplateColumns: {
      2: "repeat(2, minmax(0, 176px))",
    },

    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    container: {
      center: true,
      screens: {
        sm: "768px",
        md: "911px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },

  plugins: [],
}
