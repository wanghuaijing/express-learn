/**
 * Created by whj57 on 2017/1/4.
 */
var express = require('express');
var cors = require('cors')();
var app = express();
const path = require('path');
const index = require('./view-router/index');

var products = [
    { name: 'apple juice', description: 'good', price: 12.12 },
    { name: 'banana juice', description: 'just so sos', price: 4.50 }
];
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/statics',express.static(path.join(__dirname, 'static')));

app.use('/api',cors);
app.get('/api/products', function(req, res) {
    req.headers["Access-Control-Allow-Origin"] =  "*"
    res.json(products);
});
//view
app.use('/',index);


//handle error
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


module.exports =  app;
