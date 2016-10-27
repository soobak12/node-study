var express = require('express');
var app = express();
var morgan = require('morgan');
var path = require('path');
var main = require('./routes/index');
// var mongoose = require('mongoose');
var advice = require('./service/filter/advice');

app.use(advice.all);
app.use(morgan('dev'));

console.log('whit is.. ->', path.join(__dirname,'views')); // 변수 확인

app.set('views',path.join(__dirname,'views')); // views directory open
app.use(express.static(path.join(__dirname,'public'))); // public directory open

app.set('view engine','ejs');

// app.use('/',main);

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
//
// mongoose.connect('mongodb://test:test@mugu.iptime.org:27017/test');
//
// var Schema = mongoose.Schema;
// // var UserSchema = new Schema({
// //   name: String,
// //   age: Number
// // });
// //
// // var User = mongoose.model('soobak_user', UserSchema);
// // new User({name:'kjh',age:18}).save();
//
// var result = User.find();
// console.log(result);
