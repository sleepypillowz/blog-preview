/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        'Primary': 'hsl(47, 88%, 63%)',
        'White': 'hsl(0, 0%, 100%)',
        'Grey': 'hsl(0, 0%, 50%)',
        'Black': 'hsl(0, 0%, 7%)'
      },
      fontFamily: {
        figtree: ['Figtree'],
        sansserif:['sans-serif'],
        youngserif600: ['Figtree', 'sans-serif', '600'],
        youngserif800: ['Figtree', 'sans-serif', '800']
      },
      boxShadow: {
        'simple': '0.5rem 0.5rem',
      },
      maxWidth: {
        '73': '18.25rem',
        '74': '18.5rem',
        '75': '18.75rem',
        '76': '19rem',
        '77': '19.25rem',
        '78': '19.5rem',
        '79': '19.75rem',
      },
    },
  },
  plugins: [],
}

