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
        user: req.user._id
      }
    }
  }, function(err, tweets) {
    res.render('users/likes', {title: "User Likes", tweets})
  })
}

function add(req, res) {
  Tweet.findById(req.params.id, function(err, tweet) {
      let liked = (tweet.likes.findIndex(el => el.user.toString() === req.user._id.toString()))
      if (liked >= 0) {
        tweet.likes.splice(liked, 1)
        tweet.save(function(err) {
          res.redirect('back');
          })
    } else {
      req.body.user = req.user._id;
      req.body.userName = req.user.name;
      req.body.userAvatar = req.user.avatar;
      for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
      }
      tweet.likes.push(req.body);
      tweet.save(function(err) {
        res.redirect('back');
      })
    }
  })
}
