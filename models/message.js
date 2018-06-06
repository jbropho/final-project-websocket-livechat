const mongoose = require('mongoose'),
  schema = mongoose.Schema;

const MessageSchema = new schema({
  created_at: { type: Date, default: new Date() },
  content: {
    type: String,
    required: true
  },
  roomName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Message', MessageSchema);
