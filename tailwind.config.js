/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './themes/intershack/layouts/**/*.html',
    './themes/intershack/assets/**/*.js',
    './content/**/*.md',
    './content/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        'intershack-blue': '#003366',
        'intershack-orange': '#F3A204',
        'intershack-light': '#FFE7C8',
        'intershack-burgundy': '#a40b3a',
        'jay-peak-blue': '#0066CC',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'display': ['Open Sans', 'ui-sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/images/jay-peak-hero.jpg')",
      },
      typography: {
        DEFAULT: {
          css: {
            'h1, h2, h3, h4': {
              color: '#003366',
            },
            'h2': {
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            'a': {
              color: '#F3A204',
              '&:hover': {
                color: '#EA580C',
              },
            },
            'li': {
              marginTop: '0.25rem',
              marginBottom: '0.25rem',
            },
            'blockquote': {
              borderLeftColor: '#F3A204',
            },
            'thead th': {
              backgroundColor: '#003366',
              color: 'white',
            },
            'tbody tr:nth-child(even)': {
              backgroundColor: '#F9FAFB',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}