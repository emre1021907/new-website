const path = require('path');
var express = require('express');
var router = express.Router();


module.exports.index = function(req,res){
    res.sendFile(path.join(__dirname,'index.html'));
};

module.exports.bilgisayar = function(req,res){
    res.sendFile(path.join(__dirname,'login.html'));
    };

router.get('/elektronik',module.exports.index);
router.get('/elektronik/bilgisayar',module.exports.bilgisayar);