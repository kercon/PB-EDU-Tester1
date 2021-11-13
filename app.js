const http = require('http');
const { random } = require('lodash');
const lodash = require('lodash');

const hostname = '127.0.0.1';
const port = 8080;



const server = http.createServer((req, res) => {
  var output = lodash.without([1,2,3,4,5,6,7,8,9,0],random(9));
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World '+output);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});