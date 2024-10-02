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
        'spin-fast': 'spin-fast 500ms linear forwards;'
      },
      keyframes: {
        'spin-fast': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}

