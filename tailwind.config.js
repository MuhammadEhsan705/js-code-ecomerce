module.exports = {
  content: ["./*.html"],
  safelist: [
    '-translate-x-0'
  ],
    theme: {
      extend: {
        screens: {
          'hide-li': { 'min': '806px', 'max': '1181px' },
        },
      },
    },
  };