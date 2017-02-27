/**
 * Created by Hakim on 2017/2/20.
 */
const TestModel = require('../model/test')
const express = require('express')
const router = express.Router()

router.post('/test', (req, res) => {
    let testObj = req.body
    let fluffy = new TestModel(testObj)

    fluffy.save()
})
module.exports = router