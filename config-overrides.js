/* eslint-disable no-param-reassign */
const rewireReactHotLoader = require('react-app-rewire-hot-loader');
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

  return config;
};
