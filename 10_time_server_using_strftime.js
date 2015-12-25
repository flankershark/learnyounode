// ron, Thu Dec 24 10:16:09 EST 2015


var net = require('net');
var strftime = require('strftime');


function main() {
    var server = net.createServer(
        function (socket) {
            socket.on('data', function (e) {
                // console.log(e);
            });
            socket.on('error', function (e) {
                console.log('ERROR: ' + e);
            });
            socket.write(strftime('%F %H:%M') + '\n');
            socket.end();
        }
    ).listen(process.argv[2]);
}

main();


//:)~

