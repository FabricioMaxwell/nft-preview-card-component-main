/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'Soft-blue': 'hsl(215, 51%, 70%)',
        'Cyan': 'hsl(178, 100%, 50%)',
        'Very-dark-blue-main': 'hsl(217, 54%, 11%)',
        'Very-dark-blue-card': 'hsl(216, 50%, 16%)',
        'Very-dark-blue-line': 'hsl(215, 32%, 27%)'
      },
    },
  },
  plugins: [],
}

