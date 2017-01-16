/**
 * Created by whj57 on 2017/1/10.
 */

const  app = require('./myapp');
const express = require('express');
const webpack = require('webpack')
const webpack_dev_config = require('./webpack.dev.config');
const config = require('./config');
const webpack_middleware = require('webpack-dev-middleware');
const webpack_hot_middleware = require('webpack-hot-middleware');
if(config.env==='development'){
    const compiler = webpack(webpack_dev_config);
    app.use(webpack_middleware(compiler,{
        publicPath:'./'+config.file,
        contentBase:'./'+config.client,
        hot:true,
        serverSideRender: true
    }));
    app.use(webpack_hot_middleware(compiler))
    app.use(express.static('./'+config.client+'static'))
    app.listen(config.development.port, function() {
        console.log('listening on port %d', config.development.port);
    });
}
