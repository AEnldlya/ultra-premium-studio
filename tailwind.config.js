/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Deep Dark Palette
        'void': '#0a0a0b',
        'dark': '#121214',
        'charcoal': '#1a1a1d',
        'graphite': '#222226',
        // Gold Accent
        'aurum': '#c9a962',
        'aurum-light': '#e8d5a3',
        'aurum-dark': '#9a7b3d',
        // Text
        'platinum': '#f5f5f5',
        'silver': '#a0a0a0',
        'muted': '#666666',
        // Semantic
        'surface': '#161618',
        'surface-hover': '#1e1e22',
      },
      fontFamily: {
        'sans': ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        'display': ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        'body': ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        'mono': ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body-md': ['1rem', { lineHeight: '1.7' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'caption': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.05em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        'section': 'clamp(5rem, 12vh, 9rem)',
      },
      borderRadius: {
        'none': '0',
        'sm': '2px',
        'DEFAULT': '4px',
        'md': '4px',
        'lg': '6px',
        'xl': '8px',
        '2xl': '12px',
        '3xl': '16px',
        'full': '9999px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}
