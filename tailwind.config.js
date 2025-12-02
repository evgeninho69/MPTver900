/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'heritage': 'var(--color-heritage)',
        'water': 'var(--color-water)',
        'digital': 'var(--color-digital)',
      },
      fontFamily: {
        'display': ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
        'body': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

