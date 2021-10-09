/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const SassRuleRewire = require('react-app-rewire-sass-rule');
const path = require('path');

module.exports = function override(config, env) {
  config = rewireReactHotLoader(config, env);

  config.resolve.alias = {
    ...config.resolve.alias,
    'react-dom': '@hot-loader/react-dom',
    '@src': path.resolve(__dirname, 'src'),
    '@apis': path.resolve(__dirname, 'src/apis'),
    '@components': path.resolve(__dirname, 'scr/components'),
    '@containers': path.resolve(__dirname, 'src/containers'),
    '@redux': path.resolve(__dirname, 'src/redux'),
  };

  config = new SassRuleRewire()
    .withRuleOptions({
      test: /\.s[ac]ss$/i,
      use: [
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              includePaths: ['node_modules', 'src/assets'],
            },
          },
        },
      ],
    })
    .rewire(config, env);

  return config;
};
