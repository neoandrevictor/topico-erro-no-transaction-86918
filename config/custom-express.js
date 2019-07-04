var express = require('express');
var consign = require('consign');

module.exports = function(){
  var app = express();
  app.use(express.static('public'));
  consign()
   .include('controllers')
   .into(app);

  return app;
}

