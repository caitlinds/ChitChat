const express = require('express');
const router = express.Router();
const likesCtrl = require('../controllers/likes');
// Require the auth middleware
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routes "starts with" /tweets

// POST /movies/:id/reviews
router.post('/add', ensureLoggedIn, likesCtrl.create);

// DELETE /reviews
// router.delete('/reviews/:id', ensureLoggedIn, reviewsCtrl.delete);

module.exports = router;