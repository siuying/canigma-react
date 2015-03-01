var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = (process.env.NODE_ENV == "production") ? require('./webpack.production.config') : require('./webpack.config')
var port = process.env.PORT ? process.env.PORT : 3000
var isProduction = (process.env.NODE_ENV == "production") ? true : false

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: !isProduction,
  historyApiFallback: true
}).listen(port, '0.0.0.0', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:' + port);
});
