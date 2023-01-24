const rishavHTTP = require('http');

const routes = require('./routes'); 

console.log(routes.someText);

const server = rishavHTTP.createServer(routes.handler);

server.listen(3000);
