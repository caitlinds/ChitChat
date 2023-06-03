const User = require('../models/user');
const Tweet = require('../models/tweet');

module.exports = {
  index
};

function index(req, res) {
  Tweet.find({ user: req.user._id }).sort([['createdAt', -1]]).exec(function(err, tweets) {
    res.render('users/profile', {title: 'Profile', tweets})
  });
}