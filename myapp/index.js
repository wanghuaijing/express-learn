/**
 * Created by whj57 on 2017/1/4.
 */
var express = require('express');
var cors = require('cors')()
var app = express();

var products = [
    { name: 'apple juice', description: 'good', price: 12.12 },
    { name: 'banana juice', description: 'just so sos', price: 4.50 }
];

app.use('/api',cors);

app.get('/api/products', function(req, res) {
    res.json(products);
});

module.exports =  app;
