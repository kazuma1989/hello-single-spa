const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = env => ({
  entry: `${__dirname}/src/root-config`,
  output: {
    path: `${__dirname}/dist`,
    // filename: 'root-config.js',
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

  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },

  plugins: [
    new HtmlWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   // inject: false,
    //   // template: 'src/index.ejs',
    //   // templateParameters: {
    //   //   isLocal: env && env.isLocal === 'true',
    //   // },
    // }),
  ],

  // externals: ['single-spa', /^@react-mf\/.+$/],
})
