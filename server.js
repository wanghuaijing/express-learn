/**
 * Created by whj57 on 2017/1/10.
 */
var  app = require('./myapp')
var server = app.listen(3000, function() {
    console.log('listening on port %d', server.address().port);
})
