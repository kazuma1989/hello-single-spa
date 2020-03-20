// @ts-check
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = env => ({
  entry: {
    'root-config': `${__dirname}/src/root-config`,
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
  },

  // devtool: 'sourcemap',
  // module: {
  //   rules: [
  //     // { parser: { system: false } },
  //     {
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       use: [{ loader: 'babel-loader' }],
  //     },
  //   ],
  // },

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
