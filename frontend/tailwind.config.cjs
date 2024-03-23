/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        black: "rgb(0 0 0)",
        hover: "#8FD8B5",
        click: "#FF6D3B",
        darkred: "#0F0F0F",
        eerieDark: '#1B1B1B',
        ticketLeft: '#72AD91',
        ticketEmpty: '#FFF9F3',
        claim: '#FF6D3C',
        soldout: '#989898',
        listColor: '#131313',
        footer: '#989898'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        anton: ["Anton-Regular", "sans-serif"],
        montserrat: ["Montserrat-Regular", "sans-serif"],
        montserratMedium: ["Montserrat-Medium", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
