var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = (process.env.NODE_ENV == "production") ?  require('./webpack.production.config') : require('./webpack.config')
var port = process.env.PORT ? process.env.PORT : 3000

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(port, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:' + port);
});
