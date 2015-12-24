// ron, Wed Dec 23 01:52:53 EST 2015
// version: 1 it works but it's not simple and clear
// version: 2 it should be simpler and clearer


var http = require('http');


// url : string
// callback (object)
function send_request(url, callback) {
    var req = http.get(
        url,
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
                    callback(
                        {
                            req_url: url,
                            res_len: chunk_arr_size,
                            res_str: chunk_arr.join('')
                        }
                    );
                }
            );
        }
    );
    
    req.on('error', console.error);
}

function handle_response() {
    var counter = 0;
    var res_arr = {  };
    
    return function handle(res) {
        res_arr[res.req_url] = res;
        ++counter;
        if (counter == process.argv.length - 2)
            for (var i = 2; i < process.argv.length; i++)
                console.log(res_arr[process.argv[i]].res_str);
    };
};

function main() {
    var handler = handle_response();
    for (var i = 2; i < process.argv.length; i++)
        send_request(process.argv[i], handler);
}

main();


//:)~
