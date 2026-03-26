const mongoose = require('../db/mongoose'); // কানেকশন import

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, default: 18 }
});

const User = mongoose.model('User', userSchema); // collection নাম হবে 'users'

module.exports = User;