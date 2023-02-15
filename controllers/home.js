const Tweet = require('../models/tweet');

module.exports = {
  index
};

function index(req, res) {
    Tweet.find({}, function(err, tweets) {
        console.log(tweets);
      res.render('home', { title: 'Home', tweets});
    });
}