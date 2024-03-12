const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  /**
   * Defining Entry Point For Webpack.
   * From here, webpack looks to start building the bundle.
   */
  entry: "./src/index.tsx",

  /**
   * Here webpack should output your bundles, assets, and anything
   * else you bundle or load with webpack.
   */
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },

  // These options changes how modules are resolved by webpack.
  resolve: {
    extensions: [".tsx", ".ts", ".js"],

    // Alias
    alias: {
      "@screens": path.resolve(__dirname, "src/screens/"),
      "@components": path.resolve(__dirname, "src/components/"),
    },
  },

  /**
   * These options determine how the different types of modules within
   * a project will be treated.
   */
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },


  /**
   * This option is used to customize the webpack build
   * process in a variety of ways
   */
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
