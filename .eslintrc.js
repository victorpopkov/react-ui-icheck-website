module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    es6: true,
  },
  ignorePatterns: ['dist/'],
  parser: '@babel/eslint-parser',
  rules: {
    'import/no-unresolved': [2, { ignore: ['@Config'] }],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
};
