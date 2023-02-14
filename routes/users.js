var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/users');
var bookmarksCtrl = require('../controllers/bookmarks');
// Require the auth middleware
const ensureLoggedIn = require('../config/ensureLoggedIn');

//GET /todos/:id
//get single todo (need id)
//.show is controller action
router.get('/', ensureLoggedIn, usersCtrl.index);

router.get('/bookmarks', ensureLoggedIn, bookmarksCtrl.index);

module.exports = router;
