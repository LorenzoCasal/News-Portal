/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'nanum': ['Nanum Myeongjo', 'serif'],
        'bebas': ['Bebas Neue', 'cursive'],
        'flow' : ['Flow Circular', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'recent': '20px 20px 60px #d9d9d9, -20px -20px 60px #fff',
      },
      width: {
        493: 493.5,
      },
    },
  },
  plugins: [],
}
