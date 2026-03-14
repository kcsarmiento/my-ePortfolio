/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: '#0f172a',
          paper: '#f8fafc',
          accent: '#0f766e',
          highlight: '#f97316',
          deep: '#0b1120',
        },
      },
      boxShadow: {
        soft: '0 16px 36px -20px rgba(15, 23, 42, 0.35)',
      },
    },
  },
  plugins: [],
}
