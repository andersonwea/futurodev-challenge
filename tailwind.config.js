/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#A03333',
        secondary: '#222',
      },

      colors: {
        white: '#FFF',

        'red-500': '#FF0202',

        'gray-400': '#B4B4B4',
        'gray-500': '#787878',
      },

      fontFamily: {
        'title-primary': 'var(--title-primary)',
        'title-secondary': 'var(--title-secondary)',
        default: '--var(deafult)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
