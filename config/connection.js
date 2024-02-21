const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/thoughtDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

module.exports = mongoose.connection;