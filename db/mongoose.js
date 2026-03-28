const mongoose = require('mongoose');

const uri = process.env.MONGO_URI; 

mongoose.connect(uri)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ DB Error:', err));

module.exports = mongoose;