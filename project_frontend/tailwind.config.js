/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rabuste: {
          // dynamic colors using CSS variables
          bg: 'rgb(var(--bg) / <alpha-value>)',       
          surface: 'rgb(var(--surface) / <alpha-value>)',  
          text: 'rgb(var(--text) / <alpha-value>)',     
          muted: 'rgb(var(--muted) / <alpha-value>)',    
          
          // static brand colors
          gold: '#D4AF37',     
          orange: '#C25E00',   
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}