var http = require('http')
var fs = require('fs');

var port = process.argv[2];
var filename = process.argv[3];


var server = http.createServer(function(req, res) {

  var fileStream = fs.createReadStream(filename);
  fileStream.pipe(res);

});

server.listen(port);
