const http = require('http');

const server = http.createServer(function(request, response) {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello World');
});

server.listen({ port: 3001, host: 'localhost' }, function() {
  console.log('Server is running!');
  console.log(JSON.stringify(http.request.headers));
});

