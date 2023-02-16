const express = require('express');
const router = express.Router();
const bookmarksCtrl = require('../controllers/bookmarks');
// Require the auth middleware
const ensureLoggedIn = require('../config/ensureLoggedIn');

//see index page
router.get('/', ensureLoggedIn, bookmarksCtrl.index);

//add and remove like
router.get('/:id', ensureLoggedIn, bookmarksCtrl.add);

module.exports = router;
