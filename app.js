// npm = node package manager
// npm install -g nodemon 
// nodemon app.js ile açarsak yaptığımız değişiklikler anında web sitesine yansır.
// npm remove modüladı  --> modülü siler


var http = require('http');
var fs= require('fs');
const { url } = require('inspector');
var routeelektronik = require('./elektronikcontroller')


var express = require('express');
const path = require('path');
const elektronikcontroller = require('./elektronikcontroller');
var app = express()
app.use('/public',express.static(path.join(__dirname,'public')));


app.use('/', routeelektronik)

app.listen(3000);