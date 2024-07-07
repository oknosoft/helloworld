const path = require("node:path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || "development",  // production
  entry: "./src/index.js",                      // входная точка - исходный файл
  output:{
    path: path.resolve(__dirname, "../build"),  // путь к каталогу выходных файлов - папка public
    //publicPath: "./",
    filename: "static/js/bundle.js",            // название создаваемого файла
    chunkFilename: 'static/js/[name].chunk.js',
    assetModuleFilename: 'static/media/[name].[hash][ext]',
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "../build"),
      watch: false,
    },
    proxy: [
      {
        context: ['/couchdb', '/adm', '/auth'],
        target: process.env.PROXY || 'https://hello.oknosoft.ru/',
        secure: false,
        xfwd: true,
        //pathRewrite: { '^/api': '' },
        // bypass(req, res, proxyOptions) {
        //   if (req.headers.accept.indexOf('html') !== -1) {
        //     console.log('Skipping proxy for browser request.');
        //     return '/index.html';
        //   }
        // },
      },
    ],
    port: process.env.PORT || 8061,
    open: true,
    liveReload: false,
    hot: false,
  },
  devtool: false,
  plugins: [
    new webpack.SourceMapDevToolPlugin({}),
    new HtmlWebpackPlugin({
      template: "public/index.html"
    }),
    // new WorkboxPlugin.GenerateSW({
    //   // these options encourage the ServiceWorkers to get in there fast
    //   // and not allow any straggling "old" SWs to hang around
    //   clientsClaim: true,
    //   skipWaiting: true,
    //   maximumFileSizeToCacheInBytes: 180 * 1024 * 1024,
    // }),
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
