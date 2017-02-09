/**
 * Created by whj57 on 2017/1/18.
 */
const express = require('express');
const router = express.Router();

router.get('/detail/:id',function(req,res,next){
    var info = {name:'whj'}
    if(!req.params.id) return next();
    res.json(info)
});


module.exports = router;