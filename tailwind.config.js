/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        primary: "#293144",
        secondary: "#078a1d",
        lightGray: "#0005230f",
        bg_col: "#000723",
        blue_col: "#0c7ae700",
        dark_blue_col: "#0a0f2c",
        btn_disabled: "#141935",
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
  plugins: [require("@headlessui/tailwindcss")],
};

/*eslint-env node*/
