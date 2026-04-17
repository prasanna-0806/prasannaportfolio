import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          pink:   '#F57799',
          cyan:   '#FDC3A1',
          orange: '#FB9B8F',
          purple: '#FB9B8F',
          violet: '#F57799',
          amber:  '#FDC3A1',
        },
        space: {
          950: '#F0E0CC',
          900: '#FFF0E8',
          800: '#261418',
          700: '#30181C',
        },
        cream: '#FFF7CD',
      },
      fontFamily: {
        display: ['var(--font-archivo-black)', 'system-ui', 'sans-serif'],
        syne:    ['var(--font-syne)',    'system-ui', 'sans-serif'],
        serif:   ['var(--font-instrument)', 'Georgia', 'serif'],
        sans:    ['var(--font-syne)',    'system-ui', 'sans-serif'],
        mono:    ['var(--font-space-mono)', 'monospace'],
        comfortaa: ['var(--font-archivo-black)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'neon-pink':   '0 0 20px rgba(245,119,153,0.45), 0 0 60px rgba(245,119,153,0.12)',
        'neon-cyan':   '0 0 20px rgba(253,195,161,0.45), 0 0 60px rgba(253,195,161,0.12)',
        'neon-purple': '0 0 20px rgba(251,155,143,0.45), 0 0 60px rgba(251,155,143,0.12)',
        'glass':       '0 8px 32px rgba(0,0,0,0.12)',
      },
      animation: {
        'float':       'float 6s ease-in-out infinite',
        'pulse-pink':  'pulsePink 2.5s ease-in-out infinite',
        'spin-slow':   'spin 25s linear infinite',
        'scan':        'scan 2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-18px)' },
        },
        pulsePink: {
          '0%,100%': { boxShadow: '0 0 20px rgba(245,119,153,0.3)' },
          '50%':     { boxShadow: '0 0 50px rgba(245,119,153,0.7), 0 0 100px rgba(245,119,153,0.2)' },
        },
        scan: {
          '0%':   { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
