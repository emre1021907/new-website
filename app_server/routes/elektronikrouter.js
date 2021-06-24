const path = require('path');
var express = require('express');
var router = express.Router();
var controller = require('../controller/elektronikcontroller')

router.get('/',controller.index);
router.get('/bilgisayar',controller.bilgisayar);

module.exports = router;