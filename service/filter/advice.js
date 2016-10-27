var mongoose = require('mongoose');
mongoose.connect('mongodb://test:test@mugu.iptime.org:27017/test');

var Transaction  = require('../../model/transaction');

var Address6 = require('ip-address').Address6;

module.exports = {
  all: function(req, res, next){
    // console.log('a');
    var ip = new Address6(req.ip).inspectTeredo().client4;
    new Transaction({
      date: new Date(),
      ip: ip,
      url: req.url
    }).save();
    next();
  }
}
