// @ts-check
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = env => ({
  entry: {
    index: `${__dirname}/src/index.tsx`,
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
    publicPath: '/react/',
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
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
    }),
  ],

  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
})
