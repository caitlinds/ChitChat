const express = require('express');
const router = express.Router();
const tweetsCtrl = require('../controllers/tweets');
// Require the auth middleware
const ensureLoggedIn = require('../config/ensureLoggedIn');


router.post('/', ensureLoggedIn, tweetsCtrl.create);

router.get('/:id', ensureLoggedIn, tweetsCtrl.show);

module.exports = router;
