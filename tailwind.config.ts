import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#fdf2f4',
          100: '#fce7eb',
          200: '#f9d0d9',
          300: '#f4a9b8',
          400: '#ed7793',
          500: '#e04d70',
          600: '#cc2d58',
          700: '#ab2049',
          800: '#8f1d40',
          900: '#7a1b3b',
          950: '#44091c',
        },
        cream: {
          50: '#fefdf8',
          100: '#fdf9ed',
          200: '#faf3d7',
          300: '#f5e8b8',
          400: '#f0d88e',
          500: '#e8c462',
          600: '#d4a843',
          700: '#b38a37',
          800: '#926e31',
          900: '#785b2c',
          950: '#413016',
        },
        'rani-pink': {
          50: '#fef1f7',
          100: '#fee5f0',
          200: '#ffcce3',
          300: '#ffa1cb',
          400: '#ff6da8',
          500: '#fa3a85',
          600: '#ea1a64',
          700: '#cc0c4a',
          800: '#a80d3e',
          900: '#8c1037',
          950: '#56021b',
        },
        gold: {
          50: '#fdfbe9',
          100: '#fbf5c6',
          200: '#f8ea90',
          300: '#f3d650',
          400: '#edc321',
          500: '#ddab14',
          600: '#bf850e',
          700: '#98610f',
          800: '#7e4d14',
          900: '#6b3f17',
          950: '#3e2009',
        },
      },
      fontFamily: {
        devanagari: ['var(--font-devanagari)', 'Noto Sans Devanagari', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'petal-fall': 'petalFall 12s linear infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        petalFall: {
          '0%': { transform: 'translateY(-10vh) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(110vh) rotate(720deg)', opacity: '0.3' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
