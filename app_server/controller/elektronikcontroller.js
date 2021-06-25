const path = require('path');



module.exports.index = function(req,res){
        
    var kisiler = ['ahmet','mehmet','ali','veli']
    res.render('bilgisayar',{mesaj:"merhaba ben controller",adlar : kisiler})
};

module.exports.bilgisayar = function(req,res){
    res.sendFile(path.join(__dirname,'../../login.html'));
    };

