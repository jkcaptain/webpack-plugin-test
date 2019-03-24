const HtmlWebpackPlugin = require('html-webpack-plugin');
const MyPlugin = require('./plugins/MyPlugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
        template: 'public/index.html',
        filename: 'index.html',
        minify: false
    }),

    new MyPlugin()
  ]
}