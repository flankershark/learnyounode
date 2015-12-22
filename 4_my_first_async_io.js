// ron, Dec 21, 2015

var fs = require('fs');

if (process.argv.length > 2) {
    fs.readFile(
        process.argv[2],
        'utf8',
        function (err, data) {
            var str_arr = data.split('\n');
            console.log(str_arr.length - 1);
        }
    );
}

//:)~
