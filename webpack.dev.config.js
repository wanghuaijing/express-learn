/**
 * 开发环境配置
 */
const webpack = require('webpack');
const webpackBaseConfig = require('./webpack.base');
const webpackBasePlugins = require('./webpack.plugins');
const path = require('path');
const config = require('./config');
const config_dev = config.development;
let loaders = webpackBaseConfig.module.loaders.concat([]);
const debug  = require('./debug.js')('debug.txt')
let plugins = webpackBasePlugins.concat([
    new webpack.HotModuleReplacementPlugin()
]);
debug('http://localhost:'+config_dev.port+ config_dev.public_path + config_dev.file);
debug(path.join(__dirname, config_dev.file));
debug(config_dev.file_name);
module.exports = {
    devtool: 'eval',
    entry: [
        `webpack-dev-server/client?http://0.0.0.0:${config_dev.port}`, // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        config.entry // Your appʼs entry point
    ],
    resolve: webpackBaseConfig.resolve,
    output: {
        path: path.join(__dirname, config_dev.file),
        filename: config_dev.file_name,
        publicPath: 'http://localhost:'+config_dev.port+
        config_dev.public_path + config_dev.file
    },
    module: {
        loaders: loaders
    },
    plugins: plugins
};
