/**
 * Created by Hakim on 2017/2/20.
 */
var mongoose = require('mongoose')
var config = require('../../config')
const debug  = require('../../debug')('debug.txt')
module.exports = () => {
    const url = 'mongodb://' +  config.db.url + '/:' + config.db.port
    debug(url)
    mongoose.connect(url)
    let db = mongoose.connection
    db.on('open', (cb) => {
        console.log('数据库连接成功')
    })
}
