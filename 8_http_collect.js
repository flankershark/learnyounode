// ron, Dec 22, 2015


var util = require('util');
var http = require('http');


function empty_func() {}


(
    function () {
        var req = http.get(
            process.argv[2],
            function (res) {
                var chunk_arr = [  ];
                var chunk_arr_size = 0;
                
                res.setEncoding('utf8');
                
                res.on(
                    'data',
                    function (chunk) {
                        chunk_arr.push(chunk);
                        chunk_arr_size += chunk.length;
                    }
                );
                
                res.on(
                    'end',
                    function () {
                        console.log(chunk_arr_size);
                        console.log(chunk_arr.join(''));
                    }
                );
                
                res.on('error', console.error);
            }
        );
        
        req.on('error', console.error);
    }
)();


//:)~
