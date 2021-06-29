module.exports.index = function(req,res) {
    res.render('home')
}

module.exports.indexpost = function(req,res) {
    console.log(req)
    res.render('login')
}
