/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./Layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        lg: { max: "1024px" },

        md: { max: "768px" },

        sm: { max: "500px" },
      },
    },
  },
  plugins: [],
};
