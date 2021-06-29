const path = require('path');
var express = require('express');
var router = express.Router();
var controllerhome = require('../controller/homecontroller')

router.get('/', controllerhome.index)
router.post('/', controllerhome.indexpost);
module.exports = router