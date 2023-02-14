const express = require('express');
const router = express.Router();
const tweetsCtrl = require('../controllers/tweets');
// Require the auth middleware
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routes "starts with" /tweets

// POST /movies/:id/reviews
router.post('/', ensureLoggedIn, tweetsCtrl.create);

// DELETE /reviews
// router.delete('/reviews/:id', ensureLoggedIn, reviewsCtrl.delete);

module.exports = router;