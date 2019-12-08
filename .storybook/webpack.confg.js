const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
              transpileOnly: true
            },
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", 
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              importLoaders: 0,
              alias: {
                'assets': path.resolve(__dirname, '../app/assets')
              }
            }
          },
          {
            loader: "sass-resources-loader",
            options: {
              resources: [
                path.resolve(__dirname, '../app/assets/styles/variables/*.scss'),
                path.resolve(__dirname, '../app/assets/styles/common.scss')
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'static': path.resolve(__dirname, '../app/static'),
      'assets': path.resolve('../app/assets'),
      '@': path.resolve(__dirname, '../app'),
      '~': path.resolve(__dirname, '../app')
    }
  }
};
