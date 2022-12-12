var fs = require('fs');
var http = require('http');

fs.appendFile('dat.txt', '_DATA_', function (err) {
  if (err) throw err;                
});

// Creates server using req http:
http.createServer(function (req, res) {
  // Filesystem  function reads index.html:
  fs.readFile('index.html', function(err, data) {
  // Prepares to write html code to server:
  res.writeHead(200, {'Content-Type': 'text/html'});
  // Write data from index.html
  res.end(data);
  });
}).listen(8080);
