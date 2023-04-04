const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');

dotenv.config({
  path: path.resolve(__dirname, '.env'),
});

module.exports = {
  entry: './src/index',
  output: {
    path: path.join(__dirname, '/build'), // absolute path to the build folder
    filename: 'index.bundle.js',
    clean: true, // delete & make new folder 'build'
    publicPath: '/', // where all the assets are going to be saved (relative to ./build/index.html)
  },
  resolve: {
    alias: {
      config: path.resolve(__dirname, 'src/config/'),
      api: path.resolve(__dirname, 'src/api/'),
      pages: path.resolve(__dirname, 'src/pages/'),
      features: path.resolve(__dirname, 'src/features/'),
      components: path.resolve(__dirname, 'src/components/'),
      styles: path.resolve(__dirname, 'src/styles/'),
      svg: path.resolve(__dirname, 'src/svg/'),
      helpers: path.resolve(__dirname, 'src/utils/helpers/'),
      errors: path.resolve(__dirname, 'src/utils/errors/'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
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
        test: /.(js|jsx|ts|tsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          babelrc: true,
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
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
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
};
