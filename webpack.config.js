const path = require("path");

module.exports = {
  mode: 'development',
  devtool: "source-map",
  entry: "./example/index.js",
  output: {
    path: path.resolve(__dirname, "example/dist"),
    filename: "bundle.js",
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
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
};
