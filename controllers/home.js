const Tweet = require('../models/tweet');

module.exports = {
  index
};

function index(req, res) {
    Tweet.find({}).sort([['createdAt', -1]]).populate('likes').exec(function(err, tweets) {
      res.render('home', { title: 'Home', tweets});
    });
}