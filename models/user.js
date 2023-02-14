const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const likesSchema = newSchema ({
//   content: {
//     type: String,
//     required: true
//   },
//   user: {
//     type: Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
//   userName: String,
//   userAvatar: String
// }, {
//   timestamps: true
// })

const tweetSchema = new Schema ({
  content: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String,
  userAvatar: String
}, {
  timestamps: true
})

const userSchema = new Schema({
  name: String,
  googleId: {
    type: String,
    required: true
  },
  email: String,
  avatar: String,
  tweets: [tweetSchema],
  // likes: [likesSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);