const webpack = require('@nativescript/webpack');
const { resolve } = require('path');

module.exports = (env) => {
  webpack.init(env);

  // Learn how to customize:
  // https://docs.nativescript.org/webpack

  webpack.chainWebpack((config) => {
    // Resolve aliases
    config.resolve.alias.set('~', resolve(__dirname, 'app'));
    config.resolve.alias.set('@', resolve(__dirname, 'app'));
  });

  // Handle iOS-specific configurations
  if (env.platform === 'ios') {
    webpack.Utils.addCopyRule({
      from: 'assets',
      to: 'assets',
      context: resolve(__dirname, 'app')
    });
  }

  return webpack.resolveConfig();
};