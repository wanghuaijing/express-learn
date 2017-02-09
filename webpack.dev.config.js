/**
 * 开发环境配置
 */
var webpack = require('webpack');
var webpackBaseConfig = require('./webpack.base');
var webpackBasePlugins = require('./webpack.plugins');
var path = require('path');
const config = require('./config');
const config_dev = config.development;
var loaders = webpackBaseConfig.module.loaders.concat([]);
var debug  = require('./debug.js')('debug.txt')
var plugins = webpackBasePlugins.concat([
    new webpack.HotModuleReplacementPlugin()
]);
debug('http://localhost:' + config_dev.port+
    config_dev.public_path+config_dev.file);
module.exports = {
    devtool: 'eval',
    entry: [
        `webpack-dev-server/client?http://0.0.0.0:${config_dev
            .port}`, // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        config.entry // Your appʼs entry point
    ],
    resolve: webpackBaseConfig.resolve,
    node: {
        fs: "empty"
    },
    output: {
        path: path.join(__dirname, config_dev.file),
        filename: config_dev?config_dev.file_name_hash:config_dev.file_name,
        publicPath: 'http://localhost:'+config_dev.port+
        config_dev.public_path+config_dev.file
    },
    module: {
        loaders: loaders
    },
    plugins: plugins
};
