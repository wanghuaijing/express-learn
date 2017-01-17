/**
 * Created by whj57 on 2017/1/10.
 */

const express = require('express');
const webpack = require('webpack')
const webpack_dev_config = require('./webpack.dev.config');
const config = require('./config');
const app = require('./myapp')
const webpack_middleware = require('webpack-dev-middleware');
const webpack_hot_middleware = require('webpack-hot-middleware');
if(config.env==='development'){
    const compiler = webpack(webpack_dev_config);
        app.use(webpack_middleware(compiler,{
            publicPath:'http://localhost:'+config.development.port+
            config.development.public_path+config.development.file,
            contentBase:'http://localhost:'+config.development.port,
            hot:true,
            historyApiFallback: true,
            headers: {'Access-Control-Allow-Origin': '*'}
        }));
        app.use(webpack_hot_middleware(compiler));
        app.use(express.static('./'+config.client+'static'))
        app.listen(config.development.port, function() {
            console.log('listening on port %d', config.development.port);
        });
}
