/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        baloo: ['"Baloo 2"', 'cursive', 'sans-serif'],
        vietnam: ['"Be Vietnam Pro"', 'sans-serif'],
        nunito: ['"Nunito"', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#2E294E',
          slate: '#5E5A7E',
          muted: '#8F8BAE',
          bg: '#F6F9FE',
          card: '#FFFDF9',
          border: '#E2E8F0',
        },
        math: {
          DEFAULT: '#10B981',
          dark: '#059669',
          deep: '#047857',
          light: '#D1FAE5',
          bg: '#ECFDF5',
        },
        vietnamese: {
          DEFAULT: '#F59E0B',
          dark: '#D97706',
          deep: '#B45309',
          light: '#FEF3C7',
          bg: '#FFFBEB',
        },
        english: {
          DEFAULT: '#0EA5E9',
          dark: '#0284C7',
          deep: '#0369A1',
          light: '#E0F2FE',
          bg: '#F0F9FF',
        },
        logic: {
          DEFAULT: '#8B5CF6',
          dark: '#7C3AED',
          deep: '#6D28D9',
          light: '#EDE9FE',
          bg: '#F5F3FF',
        },
        quest: {
          DEFAULT: '#F97316',
          dark: '#EA580C',
          light: '#FFEDD5',
        }
      },
      boxShadow: {
        'pop-sm': '0 3px 0 0 rgba(0,0,0,0.15)',
        'pop-md': '0 5px 0 0 rgba(0,0,0,0.18)',
        'pop-lg': '0 8px 0 0 rgba(0,0,0,0.22)',
        'pop-math': '0 5px 0 0 #047857',
        'pop-vietnamese': '0 5px 0 0 #B45309',
        'pop-english': '0 5px 0 0 #0369A1',
        'pop-logic': '0 5px 0 0 #6D28D9',
        'pop-quest': '0 5px 0 0 #C2410C',
        'washi': '0 16px 36px rgba(46, 41, 78, 0.09)',
        'washi-hover': '0 24px 50px rgba(46, 41, 78, 0.16)',
      },
      borderRadius: {
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
      animation: {
        'bounce-subtle': 'bounce 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.03)' },
        }
      }
    },
  },
  plugins: [],
}
