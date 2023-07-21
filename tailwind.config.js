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
        default: 'var(--default)',
      },
      keyframes: {
        fadeRight: {
          '0%': { opacity: 0, transform: 'translateX(125%)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        bounceRight: {
          '0%': {
            transform: 'translateX(-30%)',
          },
          '50%': {
            transform: 'none',
          },
          '100%': {
            transform: 'translateX(-30%)',
          },
        },
        textInfiteAnimation: {
          '0%': {
            transform: 'translate3d(0, 0, 0)',
          },
          '100%': {
            transform: 'translate3d(-50%, 0, 0)',
          },
        },
      },

      animation: {
        fadeRight: 'fadeRight 400ms ease-in-out',
        bounceRight: 'bounceRight 800ms cubic-bezier(0.8,0,1,1) infinite',
        textInfiteAnimation: 'textInfiteAnimation 15s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
