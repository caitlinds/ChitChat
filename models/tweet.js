const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./tweet');

const tweetSchema = new Schema ({
  content: String,
  user:  {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  userName: String,
  userAvatar: String,
}, {
  timestamps: true
})


module.exports = mongoose.model('Tweet', tweetSchema);