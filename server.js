/**
 * Created by whj57 on 2017/1/10.
 */

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./config');
const webpack_dev_config = require('./webpack.dev.config')
/*if(config.env==='development'){
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
    app.use(express.static('./'+config.client+'static'));
    app.listen(config.development.port, function() {
        console.log('listening on port %d', config.development.port);
    });
}*/
if(config.env === 'development'){
    new WebpackDevServer(webpack(webpack_dev_config), {
        publicPath: '/',
        hot: true,
        historyApiFallback: true
    }).listen(config.development.port, '0.0.0.0', function (err, result) {
        if (err) {
            return console.log(err);
        }
    });
}

