/*

sin bl

var http = require('http');

var url = process.argv[2];

http.get(url, function(response) {
	response.setEncoding("utf8");
	var total = '';
	response.on("data", function(data) {
		total += data;
	});
	response.on("error", console.error);
	response.on("end", function() {
		console.log(total.length)	
		console.log(total);
	});

});
*/

/*
con bl
*/

var http = require('http');
var bl = require('bl');

var url = process.argv[2];
http.get(url, function(response) {
	response.pipe(bl(function(err, data){
		if (err) throw err;
		var total = data.toString();
		console.log(total.length)	
		console.log(total);		
	}));
});
