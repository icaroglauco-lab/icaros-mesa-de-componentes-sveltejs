module.exports = {
  darkMode: 'media',
  purge: ['./src/**/*.svelte'],
  theme: {
    extend: {
      colors: {
        'primary': '#ff914d',
        'secondary': '#004aad',
        'light-secondary' : "rgba(3, 111, 255, 0.76)",
        'dark-title-bg': "#001B2EF0"
      }
    },
    fontFamily:{
      'hero': ["Lato"],
      'header': ["Ruluko"],
      'body': ['"Noto Sans"']
    }
  },
  plugins: [
    require('daisyui'),
  ]
}