// ron, Dec 21, 2015

var fs = require('fs');

if (process.argv.length > 2) {
    var buf = fs.readFileSync(process.argv[2], 'utf8');
    // console.log(buf); // or buf.toString()
    var str_arr = buf.split('\n');
    console.log(str_arr.length - 1);
}

//:)~
