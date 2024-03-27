module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss',
    'autoprefixer',
    'postcss-preset-env',
    [
      'cssnano',
      {
        // https://cssnano.co/docs/introduction
        preset: [
          'default',
          {
            mergeRules: true,
          },
        ],
        // plugins: ['tailwindcss', 'autoprefixer', 'postcss-preset-env'],
      },
    ],
  ],
}