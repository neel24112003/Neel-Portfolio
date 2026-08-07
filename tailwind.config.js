/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#07090e',
        surface: {
          50: '#111522',
          100: '#181d2e',
          200: '#22283d',
          300: '#2d354e',
        },
        accent: {
          DEFAULT: '#6366f1', // Indigo / Violet
          cyan: '#38bdf8',   // Electric Cyan
          violet: '#8b5cf6', // Deep Violet
          glow: 'rgba(99, 102, 241, 0.4)',
        },
        text: {
          primary: '#f8fafc',
          secondary: '#94a3b8',
          muted: '#64748b',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Space Grotesk', 'Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)",
        'radial-glow': "radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.15), transparent 70%)",
        'cyber-gradient': "linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(56, 189, 248, 0.1) 100%)",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'scanline': 'scanline 8s linear infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(99, 102, 241, 0.25)',
        'glow-md': '0 0 30px rgba(99, 102, 241, 0.35)',
        'glow-lg': '0 0 50px rgba(99, 102, 241, 0.45)',
        'cyber': '0 10px 30px -10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(99, 102, 241, 0.2)',
      }
    },
  },
  plugins: [],
}
