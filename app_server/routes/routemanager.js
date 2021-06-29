var routeelektronik = require('./elektronikrouter')

var routerhome = require('./homerouter')



module.exports = function(app) {
    app.use('/login', routeelektronik) // bunun sonunda response html döndüğü için sayfayı sonuç olarak vericek
    app.use('/', routerhome)
}