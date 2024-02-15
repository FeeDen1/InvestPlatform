/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
      "./src/**/*.{ts,tsx,html}"
  ],
  theme: {

    extend: {
      height: {
        'dvh-80px': 'calc(100dvh - 81px)',
      },

    },
  },
  variants: {

  },
  plugins: [],
}

