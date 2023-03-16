/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ef4e52",
        secondary: "#000000",
        background: "#ffffff",
        foreground: "#000000",
        front: "#000000",
        back: "#ffffff",
        mute: "#3d3e48",
      },
      transitionDuration: {
        inherit: "inherit",
      },
      borderRadius: {
        "4xl": "2rem",
        "5rem": "5rem",
        "10rem": "10rem",
      },
      screens: {
        mobile: { max: "780px" },
        widescreen: { min: "780px" },
      },
      fontFamily: {
        raleway: "'Raleway', sans-serif",
        poppins: "'Poppins', sans-serif",
        allura: "'Allura', sans-serif",
      },
      rotate: {
        full: "360deg",
      },
    },
  },
  plugins: [],
};
