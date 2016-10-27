var express = require('express');
var router = express.Router();
// var router = requre('exprss').Router();  same with upper two lines
var request = require('request');


router.get('/', function(req, res, next){

var options = {
    url: encodeURI('http://apis.skplanetx.com/11st/common/products?version=1&page=1&count=20&sortCode=CP&searchKeyword=한삼'),
    headers: {
      'User-Agent': 'request',
      'appKey': '2ca6a80c-ee24-3d0c-93d3-5fc838b5eff1',
      'Accept': 'application/json'
    }
  };

  request(options, function(err, response, body){
    if ( err ) {
      console.log(err);
    }
    console.log('request complete');
    res.render('index', {data:body});
  });

});

module.exports = router;
