const express = require('express');
const router = express.Router();
const likesCtrl = require('../controllers/likes');
// Require the auth middleware
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/index', ensureLoggedIn, likesCtrl.index);

module.exports = router;