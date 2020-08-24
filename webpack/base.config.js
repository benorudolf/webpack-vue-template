const path = require("path");
const Dotenv = require("dotenv-webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

// paths & filenames

const port = 9009;
const env = process.env.NODE_ENV;
const abs_path = (relative) => path.resolve(__dirname, relative);

const dist_path = abs_path(`./../dist`);
const src_path = abs_path(`./../src`);
const env_path = abs_path(`./../.env.${env}`);

// server

// log

console.log("\x1b[32m", `🥃  Creating ${env} build ...`, "\x1b[0m");
console.log(
  "\x1b[32m",
  "............................................................",
  "\x1b[0m"
);

// config

module.exports = {
  context: src_path,
  entry: "./index.js",
  output: {
    filename: "build.js",
    path: dist_path,
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "build.css",
      path: dist_path,
    }),
    new CopyPlugin([{ from: "assets", to: dist_path }]),
    new Dotenv({
      path: env_path,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: (file) => /node_modules/.test(file) && !/\.vue\.js/.test(file),
      },
      {
        test: /\.(sa|sc|c)ss$/,
        resolve: {
          extensions: [".scss", ".sass"],
        },
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  devServer: {
    public: dist_path,
    historyApiFallback: true,
    writeToDisk: true,
    port,
    stats: "minimal",
    compress: false,
    hot: false,
    inline: false,
    liveReload: false,
  },
};
