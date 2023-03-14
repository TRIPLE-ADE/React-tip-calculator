/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body:['Public Sans']
      },
      colors: {
        primary: {
          'Dark-Blue': 'hsl(233 26% 24%)',
          'Lime-Green': 'hsl(136 65% 51%)',
          'Bright-cyan': 'hsl(192 70% 51%)',
          'Grayish-Blue': 'hsl(233, 8%, 62%)',
          'Light-Grayish-Blue': 'hsl(220, 16%, 96%)',
          'Very-Light-Gray': 'hsl(0, 0%, 98%)',
          White: 'hsl(0, 0%, 100%)',
        },
        secondary:{
          'orange-w': 'hsl(233 23% 16%)'
        },
      },
    },
  },
  plugins: [],
}
