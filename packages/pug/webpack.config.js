// @ts-check
/**
 * @typedef {import('webpack').Configuration} Configuration
 */

const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * @type {(env: unknown) => Configuration}
 */
module.exports = env => ({
  entry: {
    index: `${__dirname}/src/index.tsx`,
    nav: `${__dirname}/src/nav.tsx`,
  },
  output: {
    path: `${__dirname}/dist/`,
    filename: '[name].js',
  },

  optimization: {
    splitChunks: {
      name: 'vendors',
      chunks: 'all',
    },
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.pug$/,
        use: 'pug-loader',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.pug`,
    }),
  ],
})
