var express = require('express');
var router = express.Router();
//成功将代码导入到云数据库
const user = require('../sql/user')


router.get('/', function(req, res, next) {
    user.find({},(err,data)=>{
      if(err){
        console.log(err)
      }
      console.log(data)
       res.send(data)
    })
    
  });


  module.exports = router;
