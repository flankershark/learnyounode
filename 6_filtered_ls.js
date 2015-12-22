// ron, Dec 21, 2015

var fs = require('fs');
var path = require('path');

if (process.argv.length > 3) {
    // console.log(path.resolve(process.argv[2]));
    fs.readdir(
        process.argv[2],
        function (err, files) {
            // console.log(files);
            for (var p in files)
                if (process.argv[3] === path.extname(files[p]).replace('.', '')) // takes out the first '.' if there is
                    console.log(files[p]); // console.log(path.resolve(files[p]));
        }
    );
}

//:)~
