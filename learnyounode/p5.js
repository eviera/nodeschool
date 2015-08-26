var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var extension = process.argv[3];

fs.readdir(dir, function(err, list) {
  list.filter(function(x) {
  	return path.extname(x) == '.' + extension;
  }).forEach(function(x) {
  	console.log(x);
  });
});
