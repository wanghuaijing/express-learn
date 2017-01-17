/**
 * Created by whj57 on 2017/1/16.
 */
var http = require('http')
var server = http.createServer();
server.listen(4000,function(err){
    console.log(err)
});