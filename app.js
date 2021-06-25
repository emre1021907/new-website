// npm = node package manager
// npm install -g nodemon 
// nodemon app.js ile açarsak yaptığımız değişiklikler anında web sitesine yansır.
// npm remove modüladı  --> modülü siler
// express-ejs-layouts --save  ejs modülündeki sayfa şablonlarını içerir

var http = require('http');
var fs= require('fs');
const { url } = require('inspector');
var routeelektronik = require('./app_server/routes/elektronikrouter')


var express = require('express');
const path = require('path');
var app = express()

var ejslayout = require('express-ejs-layouts')

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'./app_server/views'))

app.use(ejslayout);

app.use('/public',express.static(path.join(__dirname,'public')));

app.use(function(req,res,next){
    console.log("url.."+req.originalUrl)
    console.log("timee"+ Date.now());
    next(); // next yapmazsam response dönmeyeceğim için burada tıkanacak
}) // next() fonksiyonundan sonra bir sonrakine middlewareye devam eder.

app.use('/elektronik', routeelektronik) // bunun sonunda response html döndüğü için sayfayı sonuç olarak vericek

app.listen(3000);