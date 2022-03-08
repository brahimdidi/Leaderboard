const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
      test: /\.html$/i,
      use: ['html-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg)$/,
        type: 'asset/resource',
        generator: {
          filename: './images/[name][ext]'
        }
      },
    ],
  },
  devServer: {
    static: './dist',
  },
};
