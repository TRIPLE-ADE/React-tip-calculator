/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body:['Space Mono']
      },
      colors: {
        primary: {
          White: 'hsl(0, 0%, 100%)',
          'Strong-cyan': 'hsl(172, 67%, 45%)',
          'Very-dark-cyan': 'hsl(183, 100%, 15%)',
          'Dark-grayish-cyan': 'hsl(186, 14%, 43%)',
          'Grayish-cyan': 'hsl(184, 14%, 56%)',
          'Light-grayish-cyan': 'hsl(185, 41%, 84%)',
          'Very-light-grayish-cyan': 'hsl(189, 41%, 97%)',
        },
      },
    },
  },
  plugins: [],
}
