/**
 * webpack 基本配置
 */

const webpack = require('webpack');
const path = require('path');
let config = require('./config')
const node_modules = path.join(__dirname, 'node_modules');
const fs = require('fs');
let nodeModules = {};

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
                test: /\.jsx?$/,
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
            {
                test: /\.css$/, // Only .css files
                loader: "style!css"
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)/,
                loader: 'url'
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader"
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: "url-loader?limit=10240"
            },
            {
                test: /\.swf$/, loader: "file"
            }
        ]
    }
};