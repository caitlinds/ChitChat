const User = require('../models/user');
const Tweet = require('../models/tweet');

module.exports = {
  index,
  add
};

function index(req, res) {
  Tweet.find({
    "bookmarks": {
      $elemMatch: {
        user: req.user._id
      }
    }
  }, function(err, tweets) {
    res.render('users/bookmarks', {title: "Bookmarks", tweets})
  })
}

function add(req, res) {
  Tweet.findById(req.params.id, function(err, tweet) {
      let added = (tweet.bookmarks.findIndex(el => el.user.toString() === req.user._id.toString()))
      if (added >= 0) {
        tweet.bookmarks.splice(added, 1)
        tweet.save(function(err) {
          res.redirect('back');
          })
    } else {
      req.body.user = req.user._id;
      for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
      }
      tweet.bookmarks.push(req.body);
      tweet.save(function(err) {
        res.redirect('back');
      })
    }
  })
}