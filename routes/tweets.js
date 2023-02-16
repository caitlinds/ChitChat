const express = require('express');
const router = express.Router();
const tweetsCtrl = require('../controllers/tweets');
// Require the auth middleware
const ensureLoggedIn = require('../config/ensureLoggedIn');

//create new tweet
router.post('/', ensureLoggedIn, tweetsCtrl.create);

//tweet details page/new reply page
router.get('/:id', ensureLoggedIn, tweetsCtrl.show);

//edit tweet page
router.get('/:id/edit', ensureLoggedIn, tweetsCtrl.edit)

//update tweet
router.put('/:id', ensureLoggedIn, tweetsCtrl.update);

//delete tweet
router.delete('/:id', ensureLoggedIn, tweetsCtrl.delete);

module.exports = router;
