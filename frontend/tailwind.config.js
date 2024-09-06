/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom, #a0c4ff, #5fa8d3, #48bfe3, #caf0f8)",
      },
    },
  },
  plugins: [],
};
