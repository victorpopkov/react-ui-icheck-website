const path = require('path');

module.exports = (api) => {
  api.cache(true);
  api.assertVersion('^7.4.5');

  const presets = [
    ['@babel/env', { targets: { browsers: ['last 2 versions'] } }],
    '@babel/react',
  ];

  const plugins = [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    [
      'webpack-alias',
      { config: path.join(__dirname, '/webpack/webpack.config.common.js') },
    ],
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-function-bind',
    '@babel/plugin-syntax-export-default-from',
    '@babel/plugin-transform-react-display-name',
    '@babel/plugin-transform-runtime',
    [
      'prismjs',
      {
        languages: ['bash', 'javascript', 'jsx'],
        theme: 'default',
        css: true,
      },
    ],
  ];

  return {
    compact: false,
    env: {
      production: {
        plugins,
        presets,
      },
      development: {
        plugins: [...plugins, 'react-refresh/babel'],
        presets,
      },
    },
  };
};
