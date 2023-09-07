/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        text_color: "#2F4222",
        green: "#6CB480",
        orange: "#EAB0A7",
        blue: "#B9CCFA",
        hotpink: "#FFB8B4",
        pink: "#FCDDD0",
        background: "#FAF3E1",
        attention: "#FFFA77",
      },
      height: {
        128: "37rem",
      },
      width: {
        128: "37rem",
      },
    },
    // screens: {
    //   xl: { max: "1279px" },
    //   md: { max: "767px" },
    //   sm: { max: "700px" },
    //   lg: { max: "1023px" },
    // },
  },
  variants: {},
  plugins: [],
};
