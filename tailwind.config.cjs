/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      boxShadow: {
        buttonCount:
          "0px 8px 16px 0px rgba(0, 0, 0, 0.24), 0px 2px 4px 0px rgba(0, 0, 0, 0.16)",
      },
      backgroundImage: {
        background: "url('./src/Assets/BG.png')",
      },
    },
  },
  plugins: [],
};
