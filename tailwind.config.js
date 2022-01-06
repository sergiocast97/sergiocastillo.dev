module.exports = {

  content: [
      './index.html',
      './src/**/*.{vue,js,ts,jsx,tsx}'
  ],

  theme: {
      
      extend: {
          colors: {
              black: '#27303B',
              white: '#ffffff',
              primary: '#96e6b3',
              secondary: '#98a2e7',
          },
      },

      fontFamily: {
          sans: ['Poppins', 'sans-serif']
      }
  },

  darkMode: 'class',

  plugins: [],
}