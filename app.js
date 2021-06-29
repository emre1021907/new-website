// npm = node package manager
// npm install -g nodemon 
// nodemon app.js ile açarsak yaptığımız değişiklikler anında web sitesine yansır.
// npm remove modüladı  --> modülü siler
// express-ejs-layouts --save  ejs modülündeki sayfa şablonlarını içerir
// bootstrap'in kullanılma nedeni sayfa boyutuna göre web sayfası otomatik ölçekleniyor. Sayfa boyutuna göre adapte olur
// get ile de istek yollanabilir fakat url'de parametrelerle belirtilmesi gerekiyor.


var http = require('http');
var fs= require('fs');
const { url } = require('inspector');



var express = require('express');
const path = require('path');
var app = express()

var ejslayout = require('express-ejs-layouts')

var bodyParser = require('body-parser')

app.set('view engine','ejs')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

var db = require('./app_server/models/db');

app.set('views',path.join(__dirname,'./app_server/views'))

app.use(ejslayout);

app.use('/public',express.static(path.join(__dirname,'public')));

//yönlendiriciler ekleniyor
require('./app_server/routes/routemanager')(app);

var kullanici = require('./app_server/models/kullanici')

var yenikullanici = new kullanici({
    ad:'emre',
    soyad:'kose',
    kullaniciAdi: 'emrekose',
    sifre:'12345'
})
yenikullanici.save(function(err){
    if (err) {
        console.log(err)
    }
    
})

app.use(function(req,res,next){
    console.log("url.."+req.originalUrl)
    console.log("timee"+ Date.now());
    next(); // next yapmazsam response dönmeyeceğim için burada tıkanacak
}) // next() fonksiyonundan sonra bir sonrakine middlewareye devam eder.


app.listen(3000);