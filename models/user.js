const mongoose = require('mongoose'),
      schema = mongoose.Schema;

const UserSchema = new schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', UserSchema);
