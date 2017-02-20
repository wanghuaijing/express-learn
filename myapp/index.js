/**
 * Created by whj57 on 2017/1/4.
 */
var express = require('express');
var cors = require('cors')()
var app = express();
var config = require('../config.js')
const path = require('path')
const index = require('./view-router/index')
const apis = require('./api')
const bodyParser = require('body-parser')
const multer = require('multer')
const dbConnect = require('./utils/connect')
const debug  = require('../debug')('debug.txt')
dbConnect()
var products = [
    { name: 'apple juice', description: 'good', price: 12.12 },
    { name: 'banana juice', description: 'just so sos', price: 4.50 }
];

const createApi=(app,apis)=>{
    for(var key in apis){
        app.use('/api',apis[key])
    }
    return app
};

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')
app.use('/statics',express.static(path.join(__dirname, 'static')))

app.use('/api',cors)
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.get('/api/products', (req, res)=> {
    res.json(products)
});
createApi(app,apis)
//view
app.use('/',index)


//handle error
app.use(function(req, res, next) {
    var err = new Error('Not Found')
    err.status = 404;
    next(err);
});
// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render('error')
});
app.listen(config.port)


module.exports =  app
