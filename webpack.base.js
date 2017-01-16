/**
 * webpack 基本配置
 */

var webpack = require('webpack');
var path = require('path');
var config = require('./config')
var node_modules = path.join(__dirname, 'node_modules');
var fs = require('fs');
var nodeModules = {};

// note the path.resolve(__dirname, ...) part
// without it, eslint-import-resolver-webpack fails
// since eslint might be invoked with different cwd
fs.readdirSync(path.resolve(__dirname, 'node_modules'))
    .filter(x => ['.bin'].indexOf(x) === -1)
    .forEach(mod => { nodeModules[mod] = `commonjs ${mod}`; });
module.exports = {
    resolve: {
        root: config.resolve_root
    },
    externals: nodeModules,
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    //babel插件
                    plugins: [["transform-object-assign"],
                        ["transform-runtime", {
                            "helpers": false,
                            "polyfill": true,
                            "regenerator": true,
                            "moduleName": "babel-runtime"
                        }] ],
                    presets: [ "es2015"],
                    compact: false
                }
            },
            { test:  /\.json$/, loader: 'json-loader' }
        ]
    }
};