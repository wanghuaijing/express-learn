/**
 * webpack通用插件
 */
var config = require('./config')
var webpack = require('webpack');
module.exports = [
    new webpack.DefinePlugin({
        'process.env'  : {
            'NODE_ENV' : JSON.stringify(config.env)
        },
        __LOG__: "console.log",
        __DEV__: JSON.stringify(config.env === 'development'),
        __PROD__: JSON.stringify(config.env === 'production')
    })
];