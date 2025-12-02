/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
  ],    
  theme: {
    extend: {
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
            mono: ['JetBrains Mono', 'monospace'],
        },
        colors: {
            brand: {
                dark: '#0B0F19',
                card: '#161B22',
                accent: '#38BDF8',
                accentHover: '#0EA5E9',
                text: '#F2F2F2',
                muted: '#9CA3AF'
            }
        },
        animation: {
            'float': 'float 6s ease-in-out infinite',
            'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            'liquid': 'liquid 8s ease-in-out infinite',
        },
        keyframes: {
            float: {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-20px)' },
            },
            liquid: {
                '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
                '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
            }
        }
    }
  },
  plugins: [],
}

