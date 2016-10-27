var express = require('express');
var app = express();
var morgan = require('morgan');
var path = require('path');
var main = require('./routes/index');

app.use(morgan('dev'));

console.log('whit is.. ->', path.join(__dirname,'views')); // 변수 확인

app.set('views',path.join(__dirname,'views')); // views directory open
app.use(express.static(path.join(__dirname,'public'))); // public directory open

app.set('view engine','ejs');

app.use('/',main);

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
