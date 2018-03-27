const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devServer: {
    compress: true,
    port: 9000
  },
  entry: {
    bundle: path.join(path.join(__dirname, 'app'), 'index')
  },
  resolve: {
    modules: [
      'node_modules',
      path.join(__dirname, 'app'),
      path.join(__dirname, 'assets')
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.join(__dirname, 'index.html') })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: { compact: true }
      },
      {
        test: /\.less|.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'less-loader',
            options: {
              strictMath: true,
              strictUnits: true,
              lint: true,
              compress: true,
              includePaths: [path.join(__dirname, 'assets')]
            }
          }]
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      }
    ]
  }
}
