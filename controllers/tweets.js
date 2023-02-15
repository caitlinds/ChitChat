const User = require('../models/user');
const Tweet = require('../models/tweet');

module.exports = {
  create
};

function create(req, res) {
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
  console.log(req.body)
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  const tweet = new Tweet(req.body);
  console.log(tweet)
  tweet.save(function(err) {
    if (err) console.log(err);
    res.redirect('/home');
  })
}