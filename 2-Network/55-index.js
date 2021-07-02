const http = require('http');

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  response.end(HTML);
});

server.listen({ port: 3002, host: 'localhost' }, () => { //!make sure to update port and go to matching http://localhost:3002/
  console.log('Up and Running!');
});

const HTML = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>My Hello World</title>
    <style>
      body {
        background-color: black;
        color: yellow;
        text-align: center;
        font-size: 40px;
      }
    </style>
  </head>
  <body>
    Hello World
  </body>
</html>
`;