/**
 * Created by Hakim on 2017/2/20.
 */
const TestModel = require('../model/test')
const express = require('express')
const router = express.Router()

router.post('/test', (req, res) => {
    let testObj = req.body
    let fluffy = new TestModel(testObj)
    fluffy.save((err, fluffy) => {
        if(err) {
            return res.json({
                state:-1
            })
        } else {
            return res.json({
                state:200
            })
        }
    })
})
module.exports = router