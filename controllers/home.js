const Tweet = require('../models/tweet');

module.exports = {
  index
};

function index(req, res) {
    Tweet.find({}).sort([['createdAt', -1]]).exec(function(err, tweets) {
      res.render('home', { title: 'Home', tweets});
      console.log(req.user)
    });
}