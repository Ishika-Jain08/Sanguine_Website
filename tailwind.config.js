/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-color": "#054a99",
        "bg-color": "#f0f0ed",
        "second-bg-color": "#faf9f7",
        "text-color": "#0f0f0f",
        "grape": "#604058",
        "grow":"#017E84",
      },
      fontFamily: {
        caveat: ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [],
}