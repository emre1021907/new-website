var mongoose = require('mongoose')

mongoose.Promise = require('bluebird')

var mongodb = 'mongodb://localhost/NodeProje';

mongoose.connect(mongodb,function(err){
    if(err){
        console.log('mongoose hatalı' + err)
    }
    else {
        console.log('mongoose baglandi:' + mongodb)
    }
})