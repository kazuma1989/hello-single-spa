// @ts-check
const path = require('path')

const root = path.resolve(__dirname, '../../')
const basename = path.basename(__dirname)

module.exports = env => ({
  entry: {
    index: `${__dirname}/src/index.tsx`,
  },
  output: {
    path: `${root}/public/dist/${basename}`,
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
})
