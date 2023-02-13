var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/users');
// Require the auth middleware
const ensureLoggedIn = require('../config/ensureLoggedIn');

//GET /todos/:id
//get single todo (need id)
//.show is controller action
router.get('/', ensureLoggedIn, usersCtrl.index);

module.exports = router;
