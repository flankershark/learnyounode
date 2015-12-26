// ron, Sat Dec 26 02:16:21 EST 2015


var http = require('http');
var fs = require('fs');


var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    fs.createReadStream(process.argv[3]).pipe(res);
});
server.listen(Number(process.argv[2]));


//:)~

