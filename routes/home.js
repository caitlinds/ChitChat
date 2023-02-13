var express = require('express');
var router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');

/* GET home page. */
router.get('/', ensureLoggedIn, function(req, res, next) {
  res.render('home', {title: "Home"})
});

module.exports = router;