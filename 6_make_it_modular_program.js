// ron, Dec 21, 2015

var imp_mod = require('./6_make_it_modular');

imp_mod(
    process.argv[2],
    process.argv[3],
    function (err, filter_files) {
        if (err != null)
            console.log(err);
        else
            for (var p in filter_files)
                console.log(filter_files[p]);
    }
);

//:)~
