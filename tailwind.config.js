/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFF',

        'bg-primary': '#A03333',
        'bg-secondary': '#222',

        'red-500': '#FF0202',

        'gray-400': '#B4B4B4',
        'gray-500': '#787878' 
      },

      fontFamily: {
        'title-primary': '--var(title-primary)',
        'title-secondary': '--var(title-secondary)',
        'deafult': '--var(deafult)'
      }
    },
  },
  plugins: [],
}
