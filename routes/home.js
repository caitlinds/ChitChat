var express = require('express');
var router = express.Router();
const homeCtrl = require('../controllers/home');
const ensureLoggedIn = require('../config/ensureLoggedIn');

/* GET home page. */
router.get('/', ensureLoggedIn, homeCtrl.show);

module.exports = router;
