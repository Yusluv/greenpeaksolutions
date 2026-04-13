/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0f766e',   // Teal
        secondary: '#f59e0b', // Amber
        dark: '#1e293b'
      }
    }
  },
  plugins: []
};