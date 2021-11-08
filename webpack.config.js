const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name]-[contenthash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: { sourceMap: false },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg)/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name]-[contenthash][ext]',
        },
        use: [
          {
            loader: 'image-webpack-loader',
          },
        ],
      },
      {
        test: /\.pug/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/[name]-[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/templates/index.pug',
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
  ],
}
