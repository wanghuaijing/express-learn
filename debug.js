/**
 * Created by Hakim on 2017/2/8.
 */

var fs = require('fs');
var moment = require('moment')
var data = '';
const debug = (path)=>(info)=>{
    var rs = fs.createReadStream(path);
    var data = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')+':'+ info +' \n ';
    rs.on("data", function (trunk){
        data += trunk;
    });
    rs.on("end", function () {
        fs.writeFile(path,data,(err)=>{
            if(err){
                console.log(err)
            }
        })
    });

};
module.exports = debug;

