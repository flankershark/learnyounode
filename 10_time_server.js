// ron, Fri Dec 25 01:25:46 EST 2015


var net = require('net');


function fill_zero(num) { return num >= 0 && num < 10 ? '0' + num : num.toString(); }

function get_current_formatted_time() {
    var d = new Date();
    var s = d.getFullYear()
        + '-' + fill_zero(d.getMonth() + 1)
        + '-' + fill_zero(d.getDate())
        + ' ' + fill_zero(d.getHours())
        + ':' + fill_zero(d.getMinutes());
    return s;
}


;(function () {
    net.createServer(function (c) {
        c.end(get_current_formatted_time() + '\n');
    }).listen(process.argv[2]);
}());


//:)~
