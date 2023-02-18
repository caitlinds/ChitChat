const mongoose = require('mongoose');
const User = require('../models/user');
const Tweet = require('../models/tweet');

module.exports = {
    add
};

function add(req, res) {
  Tweet.findById(req.params.id, function(err, tweet) {
    let retweeted = (tweet.retweets.find(el => el.rtUser.toString() === req.user._id.toString()));
    if (retweeted) {
      tweet.remove(function(err) {
        res.redirect('/home');
        })
  } else {
      var rtTweet = tweet;
      rtTweet._id = mongoose.Types.ObjectId();
      rtTweet.isNew = true;
      rtTweet.createdAt = Date.now();
      let rtObj = {}
      rtObj.rt = true;
      rtObj.rtUser = req.user._id;
      rtObj.rtUserName = req.user.name;
      rtTweet.retweets.push(rtObj);
      rtTweet.save(function(err) {
        if (err) console.log(err);
        res.redirect('/home');
      })
    }
  })
}