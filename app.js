var http = require('http'); //node module built in
var moduleThree = require('./module3.js');
///used predetermined number for simplicity, unsure how to export generated
//number as of now.

http.createServer(function (req, res) {
  //create a response header
  res.writeHead(200);
  //create a response body
  res.write(modThree.account());
  res.write(modThree.oneAndTwo());
  //send the response to the client
  res.end();
}).listen(3000); // accept connections on port 3000
