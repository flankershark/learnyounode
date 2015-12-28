// ron, Sun Dec 27 15:39:43 EST 2015


var http = require('http');
var url = require('url');
var util = require('util');


;(function () {
    var server = http.createServer(function (req, res) {
        var u = url.parse(req.url, true);
        var body_obj = {};
        
        if (u.query['iso'] == null) {
            body_obj = { 'error': 'iso input is necessary, put iso=iso_date in your query string as one of parameters' };
        } else {
            var time = new Date(u.query['iso']);
            if (isNaN(time)) {
                body_obj = { 'error': util.format('the value of iso parameter invalid (%s=%s)', 'iso', u.query['iso']) };
            } else {
                switch (u.pathname) {
                case '/api/parsetime':
                    body_obj = {
                        hour: time.getHours(),
                        minute: time.getMinutes(),
                        second: time.getSeconds()
                    };
                    break;
                case '/api/unixtime':
                    console.log(time);
                    body_obj = { unixtime: time.getTime() }
                    break;
                default:
                    body_obj = { 'error': 'oops: unknown request' };
                    break;
                }
            }
        }

        var body_str = JSON.stringify(body_obj);
        res.writeHead(200, { 'Content-Type': 'application/json', 'Content-Length': body_str.length });
        res.end(body_str);
    }).listen(process.argv[2]);
})();


//:)~
