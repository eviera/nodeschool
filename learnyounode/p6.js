var p6_module = require('./p6_module');

var dir = process.argv[2];
var extension = process.argv[3];

p6_module(dir, extension, function(err, retList){
	if (err) throw err;
	retList.forEach(function(x) {
		console.log(x);
	});
});