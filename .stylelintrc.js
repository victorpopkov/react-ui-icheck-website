module.exports = {
  extends: ['stylelint-config-prettier'],
  customSyntax: 'postcss-scss',
  plugins: ['stylelint-order', 'stylelint-scss'],
  ignoreFiles: ['dist/**/*.css'],
};