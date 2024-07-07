const path = require("node:path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || "production",  // production
  entry: path.resolve(__dirname, "../src/index.js"),                      // входная точка - исходный файл
  output:{
    path: path.resolve(__dirname, "../build"),  // путь к каталогу выходных файлов - папка build
    //publicPath: "./",
    filename: 'static/js/[name].[contenthash:8].js',
    // There are also additional JS chunk files if you use code splitting.
    chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
    assetModuleFilename: 'static/media/[name].[hash:8][ext]',
    clean: true,
  },
  devtool: false,
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html")
    }),
    new WorkboxPlugin.InjectManifest({
      swSrc: './src/service-worker.js',
      dontCacheBustURLsMatching: new RegExp('(^/auth/|^/adm/|^/user/|^/couchdb/|^/help/|^/r/|^/a/|\.[0-9a-f]{8}\.)'),

      exclude: [/\.map$/, /asset-manifest\.json$/, /LICENSE/],
      // Bump up the default maximum size (2mb) that's precached,
      // to make lazy-loading failure scenarios less likely.
      // See https://github.com/cra-template/pwa/issues/13#issuecomment-722667270
      maximumFileSizeToCacheInBytes: 180 * 1024 * 1024,
    }),
  ],
  resolve: {
    fallback: {
      crypto: false,
      levelup: false,
      util: false,
      assert: false,
      stream: false,
      "pouchdb-adapter-memory": false,
    }
  },
  module:{
    rules:[                                   //загрузчик для jsx
      {
        test: /\.jsx?$/,                      // определяем тип файлов
        exclude: /(node_modules)/,            // исключаем из обработки папку node_modules
        loader: 'babel-loader',               // определяем загрузчик
        options:{
          presets: ['@babel/preset-react']    // используемые плагины
        }
      },
      {
        test: /\.md$/,
        loader: 'raw-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  }
}
