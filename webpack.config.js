const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    // make build
    path: path.join(__dirname, '/build'),
    filename: 'index.bundle.js',
    clean: true, // delete & make new folder 'build'
    publicPath: '/',
  },
  devServer: {
    // setup server
    port: '3000',
    static: path.resolve(__dirname, 'src'), // static resources are here
    host: '0.0.0.0',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/, // skip these
        options: {
          babelrc: true,
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
};
