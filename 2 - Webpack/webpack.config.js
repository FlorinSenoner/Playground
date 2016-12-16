var path = require('path');
var webpack = require('webpack');

var entryJS = './src/js/index.js';
var outputJS = './src/js/bundle.js';

module.exports = {
  module: {
    loaders: [
      {
        loader: "babel-loader",
        // Skip any files outside of your project's `src` directory
        include: [
          path.resolve(__dirname, "src"),
        ],
        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,
        // Options to configure babel with
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'react'],
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css'
      }
    ]
  },
  output: {
    filename: outputJS
  },
  entry: [
    entryJS
  ],
  watch: true,
  colors: true,
  progress: true
};