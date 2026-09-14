/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        heritage: {
          50: '#FDF1F2',
          100: '#FADFE1',
          400: '#DA3A4F',
          500: '#C8102E',
          600: '#AD0D27',
          700: '#8C0B20',
        },
        ink: {
          900: '#10131A',
          950: '#0A0C10',
        },
        parchment: {
          DEFAULT: '#F1EDE4',
          light: '#FAF9F6',
        },
        brass: {
          DEFAULT: '#A8823C',
          light: '#C9A664',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        body: ['"IBM Plex Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'seal-in': {
          '0%': { opacity: '0', transform: 'scale(0.9) rotate(-4deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(-4deg)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'seal-in': 'seal-in 1s cubic-bezier(0.22, 1, 0.36, 1) 0.4s forwards',
      },
    },
  },
  plugins: [],
};
