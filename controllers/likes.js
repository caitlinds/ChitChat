const User = require('../models/user');
const Tweet = require('../models/tweet');

module.exports = {
  index
};

function index(req, res) {
  res.render('users/likes', {title: 'User Likes'});
}