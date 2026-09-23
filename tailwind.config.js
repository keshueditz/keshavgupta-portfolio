/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0A0B',
          alt: '#121215',
          surface: '#1A1A1E',
          border: '#2B2B31',
        },
        bone: {
          DEFAULT: '#F3F1EA',
          muted: '#9B9AA1',
        },
        brass: {
          DEFAULT: '#C9A227',
          dim: '#9C8022',
          light: '#E4C55C',
        },
        claret: {
          DEFAULT: '#7A2331',
          light: '#9C3244',
        },
      },
      fontFamily: {
        display: ['"Anton"', 'sans-serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      letterSpacing: {
        tightest2: '-0.04em',
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
