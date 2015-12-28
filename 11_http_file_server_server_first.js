// 
// hello_http.js
// hello node's http
// 
// ron, Fri Dec 25 10:03:49 EST 2015 (Christmas)
// Test Client: $ cat ~/scatter/test_data/http_request.mesg | nc localhost 3200
// 


var http = require('http');
var fs = require('fs');

// this version doesn't work coz an asynchronous calling inside another asynchronous callback
http.createServer(function (req, res) {
    var body = '';
    var readable = fs.createReadStream(process.argv[3]);
    readable.on('data', function (chunk) { body += chunk; });
    readable.on('end', function () { // PROBLEM
        res.writeHead(200, { 'Content-Type': 'text/plain', 'Content-Length': body.length });
        res.end(body);
    });
}).listen(process.argv[2]);


//:)~
