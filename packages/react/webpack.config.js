// @ts-check
/**
 * @typedef {import('webpack').Configuration} Configuration
 */
const path = require('path')

const root = path.resolve(__dirname, '../../')
const basename = path.basename(__dirname)

/**
 * @type {(env: unknown) => Configuration}
 */
module.exports = env => ({
  entry: {
    index: `${__dirname}/src/index.tsx`,
    nav: `${__dirname}/src/nav.tsx`,
  },
  output: {
    path: `${root}/public/dist/${basename}`,
    filename: '[name].js',
    library: ['app-react', '[name]'],
    libraryTarget: 'window',
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
    ],
  },
})
