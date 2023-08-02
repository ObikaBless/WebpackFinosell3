/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary2: "#7D8FB2",
        primary: "#D6AA1B",
        secondary: "#273B4A",
        success: "#29CC39",
      },
      fontSize: {
        md: "15px",
      },
      borderRadius: {
        2.5: "21px",
      },
    },
  },
  plugins: [],
};
