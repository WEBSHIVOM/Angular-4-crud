var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: String,
  password: String,
  created_date: Date,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);