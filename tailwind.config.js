/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontSize: {
        'sizeTop': '6.25em',
        'sizeMiddle': '2em'
      },
      colors: {
        'primary': '#5ac1ff',
        'body': '#f6f7f9',
        'link': '#fff1c4',
        'dark': '#00001f',
      },
      borderRadius: {
        'custom': '10px',
      },
      animation: {
        'fade-in': 'fade-in 1s ease-in-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
    plugins: [],
  }
}
