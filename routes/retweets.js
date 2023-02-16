const express = require('express');
const router = express.Router();
const retweetsCtrl = require('../controllers/retweets');
// Require the auth middleware
const ensureLoggedIn = require('../config/ensureLoggedIn');

//add and remove retweet
router.get('/:id', ensureLoggedIn, retweetsCtrl.add);

module.exports = router;
