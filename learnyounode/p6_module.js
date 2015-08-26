var fs = require('fs');
var path = require('path');

module.exports = function(dir, extension, callback) {

	fs.readdir(dir, function(err, list) {
	  if (err) {
	  	return callback(err);
	  }

	  var retList = list.filter(function(x) {
	  	return path.extname(x) == '.' + extension;
	  });
	  callback(null, retList);
	});

};

