const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: 'development',
  devtool: "source-map",
  entry: "./example/index.js",
  output: {
    path: path.resolve(__dirname, "example/dist"),
    publicPath: '/',
    filename: "vendor.min.js",
    clean: true
  },
  devServer: {
    static: path.join(__dirname, "example"),
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", '@babel/preset-react'],
            plugins: [['transform-react-jsx', { pragma: 'h' }]] // babel 插件，将默认的 React.createElement 转换为 h
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
};
