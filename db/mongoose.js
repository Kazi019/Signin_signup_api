const mongoose = require('mongoose');

const uri = "mongodb://localhost:27017/Signinsignout"; // তোমার DB নাম বসাও

// MongoDB connect
mongoose.connect(uri)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => console.error('Connection error:', err));

module.exports = mongoose;