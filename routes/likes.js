const express = require('express');
const router = express.Router();
const likesCtrl = require('../controllers/likes');
// Require the auth middleware
const ensureLoggedIn = require('../config/ensureLoggedIn');


router.post('/', ensureLoggedIn, likesCtrl.create);

module.exports = router;
