/**
 * Created by whj57 on 2017/1/18.
 */
const express = require('express');
const router = express.Router();

router.post('/token',(req,res)=>{
    var userInfo = req.body;
    res.json({
        params:userInfo,
    })
});
module.exports = router;