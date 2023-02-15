const User = require('../models/user');
const Tweet = require('../models/tweet');

module.exports = {
  index,
  create
};

function index(req, res) {
  res.render('users/likes', {title: 'User Likes'});
}

function create(req, res) {
  console.log(req.body);
  res.render('users/likes', {title: 'New Like'})
}