const User = require('../models/user');

module.exports = {
  create
};

function create(req, res) {
    //Add the user-centric info to req.body (the new review)
    // req.body.user = req.user._id;
    // req.body.userName = req.user.name;
    // req.body.userAvatar = req.user.avatar;
    // // We push an object with the data for the
    // // review subdoc into Mongoose arrays
    // req.user.tweets.push(req.body);
    // //Always save the top-level document (not subdocs)
    // req.user.save(function(err) {
    //   res.redirect('/home');
    // });
    console.log(req.body);
}