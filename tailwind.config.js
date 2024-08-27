/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "custom-3": "100px 100px 100px",
      },
      gridTemplateRows: {
        "custom-3": "100px 100px 100px",
      },
    },
  },
  plugins: [],
};
