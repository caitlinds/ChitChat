const User = require('../models/user');
const Tweet = require('../models/tweet');

module.exports = {
    add
};

function add(req, res) {
    res.redirect('/home');
}

//from creating replies
/*
function create(req, res) {
  Tweet.findById(req.params.id, function(err, tweet) {
      req.body.user = req.user._id;
      req.body.userName = req.user.name;
      req.body.userAvatar = req.user.avatar;
      console.log(req.body)
      for (let key in req.body) {
          if (req.body[key] === '') delete req.body[key];
      }
      tweet.replies.push(req.body);
      // Always save the top-level document (not subdocs)
      tweet.save(function(err) {
        res.redirect(`/tweets/${tweet._id}`);
      });
    });
}
*/

//add rt to all tweets (with indication of rt)(new Tweet, save)
//... add text in content or add retweet: boolean to tweets
//...and be able to display or change style based on T/F

