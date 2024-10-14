/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textColor: "#1D1D1D",
        primarybtn: "#007AFF",
        secondarybtn: "#2D3748", 
        bordercolor: "#E6E6E6"
      }
    },
  },
  plugins: [],
}

