var fs = require('fs');
var http = require('http');

fs.appendFile('dat.txt', '', function (err) {
  if (err) throw err;                
});

http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(data);
  });
}).listen(8000);
