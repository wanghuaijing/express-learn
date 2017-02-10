/**
 * Created by whj57 on 2017/1/10.
 */

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./config');
const webpack_dev_config = require('./webpack.dev.config');


if(config.env === 'development'){
    new WebpackDevServer(webpack(webpack_dev_config), {
        publicPath: webpack_dev_config.output.publicPath,
        hot: true,
        historyApiFallback: true
    }).listen(config.development.port, '0.0.0.0', function (err, result) {
        if (err) {
            return console.log(err);
        }
    });
}

