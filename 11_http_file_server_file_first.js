// 
// hello_http.js
// hello node's http
// 
// ron, Fri Dec 25 10:03:49 EST 2015 (Christmas)
// Test Client: $ cat ~/scatter/test_data/http_request.mesg | nc localhost 3200
// 


var http = require('http');
var fs = require('fs');


// 
// it only reads the file for one time, then a web server has been started once file read
// 
;(function () {
    var file_data = '';
    var readable = fs.createReadStream(process.argv[3]);
    readable.on('data', function (chunk) { file_data += chunk; });
    readable.on('end', function () {
        http.createServer(function (req, res) { // logic for the web server
            res.writeHead(200, { 'Content-Type': 'text/plain', 'Content-Length': file_data.length });
            res.end(file_data);
        }).listen(process.argv[2]);
    });
})();


//:)~
