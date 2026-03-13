module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
          inlineStyles: false,
          minifyStyles: false,
          cleanupIds: false,
        },
      },
    },
  ],
};
