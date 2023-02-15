var express = require('express');
var router = express.Router();
const homeCtrl = require('../controllers/home');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, homeCtrl.index);

module.exports = router;