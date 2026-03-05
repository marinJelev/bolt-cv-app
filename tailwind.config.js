/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          blue: '#2173BE',
          green: '#529A6A',
          purple: '#C455EB',
          red: '#EB5B55',
          orange: '#F09236',
          teal: '#1BA098',
        },
      },
    },
  },
  plugins: [],
};
