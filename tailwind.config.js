/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#4F46E5',
        'primary-orange': '#F28D35',
        'neutral-600': '#6F6C90',
      },
      fontFamily: {
        'inter': ['Inter', '-apple-system', 'Roboto', 'Helvetica', 'sans-serif'],
        'poppins': ['Poppins', '-apple-system', 'Roboto', 'Helvetica', 'sans-serif'],
        'lato': ['Lato', '-apple-system', 'Roboto', 'Helvetica', 'sans-serif'],
      },
      screens: {
        'xl': '1440px', // Extra Large screens
        'lg': '1200px', // Large screens
        'md': '768px',  // Medium screens
        'sm': '375px',  // Small screens
      },
    },
  },
  plugins: [],
}
