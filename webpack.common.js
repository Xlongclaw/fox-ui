const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry:"./src/index.tsx",
  output:{
    path : path.join(__dirname, "/dist"),
    filename : "bundle.js"
  },
  resolve:{
    extensions: ['.tsx', '.ts', '.js']
  },
  module:{
    rules:[
      {
        test:/\.(ts|tsx)$/,
        exclude:/node_modules/,
        use:'babel-loader'
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    })
  ],
}