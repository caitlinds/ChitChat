const User = require('../models/user');

module.exports = {
  show
};

function show(req, res) {
    User.find({}, function(err, users) {
        console.log(users);
      res.render('home', { title: 'Home', users});
    });
}