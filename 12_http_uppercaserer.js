// ron, Sat Dec 26 11:21:16 EST 2015

var http = require('http');

;(function () {
    http.createServer(function (req, res) {
        var in_body = '';
        req.on('data', function (chunk) { in_body += chunk; });
        req.on('end', function () {
            res.writeHead(200, { 'Content-Type': 'text/plain', 'Content-Length': in_body.length });
            res.end(in_body.toUpperCase());
        });
    }).listen(Number(process.argv[2]));
})();

//:)~

