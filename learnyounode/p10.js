var net = require('net');
var strftime = require('strftime');

var port = process.argv[2];

var server = net.createServer(function(socket) {
  var now = new Date();
  var data = strftime('%Y-%m-%d %H:%M\n', now);
  socket.write(data);
  socket.end();

});

server.listen(port);
