var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/users');
var likesCtrl = require('../controllers/likes');
const ensureLoggedIn = require('../config/ensureLoggedIn');


router.get('/', ensureLoggedIn, usersCtrl.index);

router.get('/likes', ensureLoggedIn, likesCtrl.index);


module.exports = router;