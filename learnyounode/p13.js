var http = require('http')
var url = require('url')

var port = process.argv[2];


var server = http.createServer(function(req, res) {
	//Parseo la url
	var urlObj = url.parse(req.url, true);
	if (urlObj.pathname === '/api/parsetime') {
		var date = new Date(urlObj.query.iso);
		/*
		var retObj = {};
		retObj.hour = date.getHours();
		retObj.minute = date.getMinutes();
		retObj.second = date.getSeconds();
		*/
		var retObj = {'hour': date.getHours(), 'minute': date.getMinutes(), 'second': date.getSeconds()};
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.write(JSON.stringify(retObj));
		res.end();
	} else if (urlObj.pathname === '/api/unixtime') {
		res.writeHead(200, {'Content-Type': 'application/json'});
		//Abreviado
		res.end(JSON.stringify({'unixtime': (new Date(urlObj.query.iso)).getTime()}));
	}
  
	
});

server.listen(port);
