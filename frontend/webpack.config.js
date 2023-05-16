const html = require("html-webpack-plugin")
const path = require("path")
const { VueLoaderPlugin } = require("vue-loader")

const mode = process.env.NODE_ENV || "production"

// eslint-disable-next-line no-undef
module.exports = {
  plugins: [
    new VueLoaderPlugin(),
    new html({
      title: (mode === "development" ? "[DEV] " : "") + "Vue Socket App"
    })
  ],
  mode,
  devtool: mode === "development" ? "eval" : false,
  output: {
    path: path.resolve(__dirname, "dist")
  },
  entry: path.resolve(__dirname, "./src/index.ts"),
  devServer:
    mode === "production"
      ? {}
      : {
          port: 3001,
          hot: true,
          open: true
        },
  resolve: {
    extensions: [".css", ".scss", ".sass", ".js", ".jsx", ".ts", ".tsx", ".vue"]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.([jt])sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "babel-preset-typescript-vue3", "@babel/preset-typescript"]
          }
        }
      },
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
}
