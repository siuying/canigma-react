var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = (process.env.NODE_ENV == "production") ? require('./webpack.production.config') : require('./webpack.config')
var port = process.env.PORT ? process.env.PORT : 3000
var hot = (process.env.NODE_ENV == "production") ? true : false

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: hot,
  historyApiFallback: true
}).listen(port, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:' + port);
});
