var http = require('http');
var util = require('util');
var fs = require('fs');


http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  if (request.url == "/")
  {
      fs.readFile('index.html', function(error, data){
        if(error) console.log('File not found');
        response.end(data);
      })
     //response.end('Hello World\n');
  }
  else {
    response.end('Error, page not found!!');
  }
 
}).listen(8080, '127.0.0.1');

console.log('Server running at http://127.0.0.1:8080/');

