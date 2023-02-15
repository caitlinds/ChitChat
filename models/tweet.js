const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likesSchema = new Schema ({
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

const replySchema = new Schema ({
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
  userAvatar: String,
  likes: [likesSchema]
}, {
  timestamps: true
})

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
  userAvatar: String,
  likes: [likesSchema],
  replies: [replySchema]
}, {
  timestamps: true
})

module.exports = mongoose.model('Tweet', tweetSchema);