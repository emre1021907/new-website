const path = require('path');



module.exports.index = function(req,res) {
    res.render('login')
}

module.exports.indexpost = function(req,res) {
    console.log(req.body)
    res.render('login',  {
        email : req.body.email,
        password : req.body.password
    });
 
}


module.exports.bilgisayar = function(req,res){
        
    var kisiler = ['ahmet','mehmet','ali','veli']
    res.render('bilgisayar',{mesaj:"merhaba ben controller",adlar : kisiler})
};