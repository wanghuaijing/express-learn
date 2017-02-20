/**
 * Created by Hakim on 2017/2/20.
 */
const mongoose = require('mongoose')

let testModel = mongoose.Schema({
    firstName:String,
    lastName:String,
//    passWord:String,
//    number:Number,
    date:{ type:Date, default:Date.now() }
})

testModel.methods.speak = () => {
    let fullName = this.firstName + this.lastName
    console.log(fullName)
}

module.exports = mongoose.model('test', testModel)