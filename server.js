var serve = require('serve');
var path = require('path');

var server = serve(path.join(__dirname + '/build'), {
  port: 1337,
  cache: 3600,
  ignore: ['node_modules']
});