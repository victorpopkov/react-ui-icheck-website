module.exports = {
  extends: ['stylelint-config-twbs-bootstrap'],
  customSyntax: 'postcss-scss',
  ignoreFiles: ['dist/**/*.css'],
  rules: {
    '@stylistic/number-leading-zero': null,
    '@stylistic/string-quotes': 'single',
    'selector-max-id': null,
    'selector-pseudo-class-no-unknown': [
      true,
      { ignorePseudoClasses: ['global'] },
    ],
  },
};
