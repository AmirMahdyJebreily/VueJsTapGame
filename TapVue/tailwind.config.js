/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
    "./src/components/**/*.{vue,js,ts}"
  ],
  theme: {
    extend: {
      animation: {
        'ping-slow': 'ping 900ms cubic-bezier(0, 0, 0.2, 1) forwards',
        'wiggle': 'wiggle 5s infinite 1s',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'scale(1.02)' },
          '50%': { transform: 'scale(0.980)'  },
        }
      }
    },
  },
  plugins: [],
}

