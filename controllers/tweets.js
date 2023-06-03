const User = require('../models/user');
const Tweet = require('../models/tweet');

module.exports = {
  create,
  show,
  edit,
  update,
  delete: deleteTweet
};

function create(req, res) {
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  const tweet = new Tweet(req.body);
  tweet.save(function(err) {
    if (err) console.log(err);
    res.redirect('/home');
  })
}

function show(req, res) {
  Tweet.findById(req.params.id, function(err, tweet) {
    res.render('tweets/show', {
      title: 'Thread',
      tweet
    })
  })
}

function edit(req, res) {
  Tweet.findOne({
    '_id': req.params.id,
    'user': req.user._id},
    function(err, tweet) {
      if (!tweet) return res.redirect('/home');
      res.render('tweets/edit', {
        title: 'Edit Tweet',
        tweet
  })
});
}

function update(req, res) {
  Tweet.findOne({
    '_id': req.params.id,
    'user': req.user._id},
    function(err, tweet) {
    if (!tweet) return res.redirect(`/home`);
    tweet.content = req.body.content
    tweet.save(function(err) {
      res.redirect('/home');
    })
  });
}

function deleteTweet(req, res, next) {
    Tweet.findOne({
      '_id': req.params.id,
      'user': req.user._id},
      function(err, tweet) {
        // Rogue user!
        if (!tweet) return res.redirect('/home');
        // Remove the tweet using the remove method available on Mongoose arrays
        tweet.remove(req.params.id);
        // Save the updated tweet
        tweet.save(function(err) {
          // Redirect back
          res.redirect('/home');
        })
  });
}