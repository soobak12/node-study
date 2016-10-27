var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Transaction = new Schema({
  date: Date,
  url: String,
  ip: String
});

module.exports = mongoose.model('soobak_transaction',Transaction);
