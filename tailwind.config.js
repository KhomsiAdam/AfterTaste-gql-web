/* eslint-disable global-require */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#fbf8f2',
          '100': '#f8f0e6',
          '200': '#ecdabf',
          '300': '#e1c499',
          '400': '#cb984d',
          '500': '#b46c00',
          '600': '#a26100',
          '700': '#875100',
          '800': '#6c4100',
          '900': '#583500'
        },
        'secondary': {
          '50': '#f7fcf8',
          '100': '#eff9f1',
          '200': '#d7efdb',
          '300': '#bfe5c5',
          '400': '#8fd29a',
          '500': '#5fbe6e',
          '600': '#56ab63',
          '700': '#478f53',
          '800': '#397242',
          '900': '#2f5d36'
        }
      },
      screens: {
        'xs': { 'max': '360px' },
        '3xl': '1920px',
        '4xl': '2560px',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
