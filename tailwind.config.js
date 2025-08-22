/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'terminal-green': '#00ff41',
        'terminal-green-dark': '#00cc33',
        'terminal-bg': '#0a0a0a',
        'terminal-error': '#ff0040',
        'terminal-warning': '#ffaa00',
        'terminal-text': '#e0e0e0',
        'terminal-muted': '#808080',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      animation: {
        'blink': 'blink 1s infinite',
        'blink-fast': 'blink 0.7s infinite',
        'scan': 'scan 8s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'type': 'type 2s steps(40, end)',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        glow: {
          '0%': { textShadow: '0 0 10px #00ff41, 0 0 20px #00ff41' },
          '100%': { textShadow: '0 0 20px #00ff41, 0 0 30px #00ff41' },
        },
        type: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}