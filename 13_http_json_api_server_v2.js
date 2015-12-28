// ron, Sun Dec 27 18:32:46 EST 2015


var http = require('http');
var url = require('url');
var util = require('util');


function get_time(time_str) {
    return new Date(time_str);
}

function validate_time(time) {
    return !isNaN(time);
}

function reply_parsetime(url_obj) {
    var time = get_time(url_obj.query.iso);
    return validate_time(time) ? {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    } : reply_error('the value of iso parameter invalid');
}

function reply_unixtime(url_obj) {
    var time = get_time(url_obj.query['iso']);
    return validate_time(time) ? {
        unixtime: time.getTime()
    } : reply_error('the value of iso parameter invalid');
}


function reply_error(err_mesg) {
    return {
        error: err_mesg
    };
}

function reply(req) {
    var u = url.parse(req.url, true);
    var response = null;
    
    switch (u.pathname) {
    case '/api/parsetime':
        response = reply_parsetime(u);
        break;
    case '/api/unixtime':
        response = reply_unixtime(u);
        break;
    default:
        response = reply_error('oops: unknown request');
        break;
    };

    return response;
}


;(function () {
    http.createServer(function (req, res) {
        var body_str = JSON.stringify(reply(req));
        res.writeHead(200, { 'Content-Type': 'application/json', 'Content-Length': body_str.length });
        res.end(body_str);
    }).listen(process.argv[2]);
})();


//:)~
