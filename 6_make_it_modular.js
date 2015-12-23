// ron, Dec 22, 2015

var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext_filter, callback) {
    fs.readdir(
        dir,
        function (err, files) {
            try {
                if (err != null)
                    throw err;
                
                // different solutions but the same idea
                // just pick whatever you want, either array.filter() or for in loop
                
                var filtered_files = [  ];
                filtered_files = files.filter(
                    function (value) {
                        return path.extname(value).replace('.', '') === ext_filter;
                    }
                );
                
                // for (var p in files)
                //     if (path.extname(files[p]).replace('.', '') === ext_filter)
                //         filtered_files.push(files[p]);
                
                callback(null, filtered_files);
            } catch (err) {
                callback(err, null);
            }
        }
    );
}

//:)~
