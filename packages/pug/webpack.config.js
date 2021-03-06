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
    'root-config': `${__dirname}/src/root-config.ts`,
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

  // @ts-ignore
  devServer: {
    historyApiFallback: true,
  },
})
