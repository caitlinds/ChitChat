const User = require('../models/user');
const Tweet = require('../models/tweet');

module.exports = {
  index,
  add
};

function index(req, res) {
  Tweet.find({
    "likes": {
      $elemMatch: {
        user: `${req.params.id}`
      }
    }
  }, function(err, tweets) {
    res.render('users/likes', tweets)
  })
}

// function index(req, res) {
//   Tweet.find({}, function(err, tweets) {
//       res.render('users/likes', {title: 'User Likes', tweets})
//     })
//   }

function add(req, res) {
  Tweet.findById(req.params.id, function(err, tweet) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    tweet.likes.push(req.body);
    tweet.save(function(err) {
      console.log(tweet.likes.length);
      if (req.referer === 'http://localhost:3000/home') res.redirect('/home', tweet);
      if (req.referer === 'http://localhost:3000/users') res.redirect('/users');
    })
  })
}