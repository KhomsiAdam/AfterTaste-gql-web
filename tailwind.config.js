/* eslint-disable global-require */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#fdf4f6',
          '100': '#fce8ed',
          '200': '#f6c6d2',
          '300': '#f1a4b7',
          '400': '#e75f80',
          '500': '#dc1b4a',
          '600': '#c61843',
          '700': '#a51438',
          '800': '#84102c',
          '900': '#6c0d24'
        },
        'secondary': {
          '50': '#fffcfd',
          '100': '#fff9fb',
          '200': '#fff1f4',
          '300': '#ffe8ed',
          '400': '#fed6e0',
          '500': '#fec5d3',
          '600': '#e5b1be',
          '700': '#bf949e',
          '800': '#98767f',
          '900': '#7c6167'
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
