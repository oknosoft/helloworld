const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: process.env.NODE_ENV || "development",  // production
  entry: "./src/index.js",                      // входная точка - исходный файл
  output:{
    path: path.resolve(__dirname, "../build"),  // путь к каталогу выходных файлов - папка public
    publicPath: "/build/",
    filename: "bundle.js"                       // название создаваемого файла
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "../build"),
    },
    proxy: [
      {
        context: ['/couchdb', '/adm'],
        target: process.env.PROXY,
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
    port: 8031,
    open: true
  },
  devtool: false,
  plugins: [new webpack.SourceMapDevToolPlugin({})],
  resolve: {
    fallback: {
      crypto: false,
      levelup: false,
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
