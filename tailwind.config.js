/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        mincho: [
          '"Hiragino Mincho Pro"',
          '"Yu Mincho"',
          '"YuMincho"',
          '"Hiragino Mincho ProN"',
          '"Hiragino Mincho Pro"',
          "serif",
        ],
      },
    },
  },
  plugins: [],
};
