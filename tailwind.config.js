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
        // Dark mode (default)
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'bg-tertiary': 'var(--bg-tertiary)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'accent-primary': 'var(--accent-primary)',
        'accent-warm': 'var(--accent-warm)',
        'accent-green': 'var(--accent-green)',
        'border': 'var(--border)',
      },
      fontFamily: {
        sans: ['Crimson Pro', 'Georgia', 'serif'],
        heading: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.4s ease-out forwards',
        'fade-left': 'fadeLeft 0.6s ease-out forwards',
        'fade-right': 'fadeRight 0.6s ease-out forwards',
        'swing-in': 'swingIn 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-particle': 'floatParticle 20s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'glow-warm': 'glowWarm 8s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px) scale(0.95)' },
          '60%': { opacity: '1', transform: 'translateY(-5px) scale(1.02)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        fadeLeft: {
          '0%': { opacity: '0', transform: 'translateX(-80px) rotate(-5deg) scale(0.9)' },
          '60%': { opacity: '1', transform: 'translateX(5px) rotate(2deg) scale(1.02)' },
          '100%': { opacity: '1', transform: 'translateX(0) rotate(0deg) scale(1)' },
        },
        fadeRight: {
          '0%': { opacity: '0', transform: 'translateX(80px) rotate(5deg) scale(0.9)' },
          '60%': { opacity: '1', transform: 'translateX(-5px) rotate(-2deg) scale(1.02)' },
          '100%': { opacity: '1', transform: 'translateX(0) rotate(0deg) scale(1)' },
        },
        swingIn: {
          '0%': { opacity: '0', transform: 'translateX(-120px) rotate(-15deg) scale(0.8)' },
          '50%': { opacity: '1', transform: 'translateX(8px) rotate(5deg) scale(1.05)' },
          '70%': { transform: 'translateX(-4px) rotate(-2deg) scale(0.98)' },
          '85%': { transform: 'translateX(2px) rotate(1deg) scale(1.01)' },
          '100%': { opacity: '1', transform: 'translateX(0) rotate(0deg) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatParticle: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
            opacity: '0',
          },
          '10%': {
            opacity: '0.8',
          },
          '50%': {
            transform: 'translate(var(--drift-x, 20px), var(--drift-y, -30px)) scale(1.2)',
            opacity: '0.6',
          },
          '90%': {
            opacity: '0.3',
          },
        },
        glow: {
          '0%, 100%': {
            filter: 'brightness(1) blur(0px)',
            transform: 'scale(1)',
          },
          '50%': {
            filter: 'brightness(1.3) blur(2px)',
            transform: 'scale(1.1)',
          },
        },
        glowWarm: {
          '0%, 100%': {
            opacity: '0.6',
            transform: 'scale(1)',
            filter: 'brightness(1)',
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.15)',
            filter: 'brightness(1.2)',
          },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
