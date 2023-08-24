/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#293144",
        secondary: "#078a1d",
        lightGray: "#0005230f",
        bg_col: "#000723",
        blue_col: "#0c7ae700",
      },
      spacing: {
        "plan-width": "422px",
      },
      maxWidth: {
        1313: "1313px",
        "plan-width": "422px",
        xxsm: "161px",
      },
    },
  },
  plugins: [],
};
