var express = require('express');
var path = require('path');
var open = require('open');
var port = 3000;

var app = express();

app.use(express.static('public'));
//  app.use(express.static('src/views'));

// Using EJS template engine
 app.set('views', './src/views');

 app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index');
});

app.listen(port, function(err){
  if(err){
    console.log(err);
  }else{
    open('http://localhost:'+port);
  }
});
