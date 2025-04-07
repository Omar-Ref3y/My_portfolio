/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  safelist: [
    'shadow-glow',
    'shadow-glow-lg',
    'hover:shadow-glow',
    'hover:shadow-glow-lg'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F1A208', // Orange
        'primary-glow': '#F7B838', // Lighter Orange
        secondary: '#3B82F6', // Blue-500
        'secondary-glow': '#60A5FA', // Blue-400
        dark: '#1E293B', // Slate-800
        light: '#F8FAFC', // Slate-50
        'dark-light': '#334155', // Slate-700
        'light-dark': '#E2E8F0', // Slate-200
        'accent-dark': '#E2E8F0', // Slate-200
        'accent-light': '#334155', // Slate-700
      },
      boxShadow: {
        'glow': '0 0 15px -3px rgba(241, 162, 8, 0.3)', // Orange glow
        'glow-lg': '0 0 25px -5px rgba(241, 162, 8, 0.4)', // Larger orange glow
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'slide-in': {
          '0%': {
            transform: 'translateX(-100%)'
          },
          '100%': {
            transform: 'translateX(0)'
          },
        },
        'slide-up': {
          '0%': {
            transform: 'translateY(100%)'
          },
          '100%': {
            transform: 'translateY(0)'
          },
        },
        'border-flow': {
          '0%, 100%': {
            'border-color': 'rgba(241, 162, 8, 0.3)'
          },
          '50%': {
            'border-color': 'rgba(241, 162, 8, 0.6)'
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'slide-in': 'slide-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'border-flow': 'border-flow 3s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
