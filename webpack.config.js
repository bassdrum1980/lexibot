const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/build'), // absolute path to the build folder
    filename: 'index.bundle.js',
    clean: true, // delete & make new folder 'build'
    publicPath: '/', // where all the assets are going to be saved (relative to ./build/index.html)
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      styles: path.resolve(__dirname, 'src/styles/'),
    },
    extensions: ['.js'],
  },
  devServer: {
    port: '3000',
    static: path.resolve(__dirname, 'src'), // static resources are here
    host: '0.0.0.0',
    historyApiFallback: true, // serve index.html for any route, even 404
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
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
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
};
