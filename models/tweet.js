const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookmarksSchema = new Schema ({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

const likesSchema = new Schema ({
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
  likes: [likesSchema],
  bookmarks: [bookmarksSchema]
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
  replies: [replySchema],
  bookmarks: [bookmarksSchema],
  retweets: [{
    rt: {
      type: Boolean,
      default: false
    },
    rtUser: {
      type: Schema.Types.ObjectId,
      ref: 'User',
  },
    rtUserName: String,
  }],
}, {
  timestamps: true
})

module.exports = mongoose.model('Tweet', tweetSchema);