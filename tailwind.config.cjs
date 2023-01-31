/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      ip: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
    container: {
      padding: {
        DEFAULT: "20px",
        sm: "64px",
        lg: "120px",
        xl: "160px"
      },
    },
    fontSize: {
      xxs: ["10px"],
      xs: ["12px"],
      sm: ["14px"],
      md: ["16px"],
      lg: ["18px"],
      xl: ["20px"],
      xxl: ["24px"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      gray: "#cccccc",
      main: {
        light: '#00dfc4',
        black: '#223243'
      }
    },
    extend: {},
  },
};
