// @ts-check
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = env => ({
  entry: {
    'root-config': `${__dirname}/src/root-config.ts`,
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
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
      scriptLoading: 'defer',
      inject: 'head',
      // templateParameters: {
      //   isLocal: env && env.isLocal === 'true',
      // },
    }),
  ],

  // externals: ['single-spa', /^@react-mf\/.+$/],

  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
})
