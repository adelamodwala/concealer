var path = require('path');
var webpack = require('webpack');
var jsonImporter = require('node-sass-json-importer');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'whatwg-fetch',
        'eventsource-polyfill', // necessary for hot reloading with IE
        'webpack-hot-middleware/client',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }, {
            test: /\.jsx?/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src')
        }, {test: /\.json$/, loader: 'json'}]
    },
    sassLoader: {
        // Apply the JSON importer via sass-loader's options.
        importer: jsonImporter
    }
};
