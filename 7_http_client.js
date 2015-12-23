// ron, Dec 22, 2015

var http = require('http');

function empty_func() {}

var request = http.get(
    process.argv[2],
    function (response) {
        response.setEncoding('utf8');
        response.on('data', console.log);
        response.on('err', console.error);
        response.on('end', empty_func);
    }
);

request.on('error', console.error);

//:)~
