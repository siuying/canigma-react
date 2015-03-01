var webpack = require('webpack');

module.exports = {
  entry: [
    './scripts/index'
  ],
  output: {
    path: __dirname + '/scripts/',
    filename: 'bundle.js',
    publicPath: '/scripts/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { 
        test: /\.jsx?$/, 
        loaders: ['jsx?harmony'], 
        exclude: [/node_modules/, /CharacterToSounds/, /SoundToCharacters/] }
    ]
  }
};
