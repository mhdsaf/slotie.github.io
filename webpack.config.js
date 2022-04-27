const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerWebpackPlugin = require("image-minimizer-webpack-plugin");
const { extendDefaultPlugins } = require("svgo");
const { ProvidePlugin } = require("webpack");
const json5 = require("json5");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  entry: `${__dirname}/src/script.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
    publicPath: 'auto',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /.css$/,
        use: ["style-loader","css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg|jpg)$/i,
        type: "asset/resource",
        generator: {
          filename: "img/[hash][ext]",
        },
      },
      {
        test: /\.json5$/i,
        type: "json",
        parser: {
          parse: json5.parse,
        },
      },
    ],
  },
};