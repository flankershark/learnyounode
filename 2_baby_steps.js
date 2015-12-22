// ron, Dec 21, 2015

var util = require('util');

// console.log(process.argv);

var sum = 0;
if (process.argv.length > 2)
    for (var i = 2; i < process.argv.length; i++)
        sum += +process.argv[i];

/*

// another version
if (process.argv.length > 2)
    for (var i = 2; i < process.argv.length; i++)
        if (!isNaN(Number(process.argv[i])))
            sum += +process.argv[i];

*/

console.log(sum);

//:)~
