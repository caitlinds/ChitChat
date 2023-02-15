const User = require('../models/user');
const Tweet = require('../models/tweet');

module.exports = {
  index
};

function index(req, res) {
  Tweet.find({ user: req.user._id }, function(err, tweets) {
    res.render('users/profile', {title: 'Profile', tweets})
  })
}