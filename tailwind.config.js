/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: '#FAF8F4',
          100: '#F9F6F0',
          200: '#F3EFE6',
          300: '#E7DFD2',
          400: '#D5C9B8',
          card: '#FFFDF9',
        },
        forest: {
          50: '#EAF3ED',
          100: '#CFE6D7',
          200: '#9FC9AF',
          400: '#4D8A66',
          600: '#26543C',
          700: '#1F4232',
          800: '#173427',
          900: '#10241B',
        },
        ochre: {
          50: '#FDF8ED',
          100: '#F9EED4',
          200: '#F3DC9F',
          300: '#E7C365',
          400: '#D8A63D',
          500: '#C68A35',
          600: '#A76F26',
          700: '#83541E',
        },
        night: {
          bg: '#121714',
          card: '#1A211D',
          elevated: '#222B26',
          border: '#2A362F',
          text: '#EDE8DF',
          muted: '#9CA79E',
        }
      },
      fontFamily: {
        serif: ['Fraunces', 'Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'notebook': '0 4px 20px -2px rgba(28, 36, 30, 0.06), 0 2px 6px -1px rgba(28, 36, 30, 0.04)',
        'notebook-hover': '0 10px 25px -4px rgba(28, 36, 30, 0.1), 0 4px 10px -2px rgba(28, 36, 30, 0.06)',
        'dark-notebook': '0 4px 20px -2px rgba(0, 0, 0, 0.4), 0 2px 6px -1px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}
