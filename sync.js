/**
 * Created by ggnanasekar on 9/2/2016.
 */

var fs = require('fs');

var readHandler = function reader(err,data){
    if(err){
        console.log(err);
    }

    console.log("Asynchronous read : " + data);
}

fs.readFile('input.txt',readHandler);
var data = fs.readFileSync('input.txt');
console.log('Synchronous Read : ' + data);

console.log("Program completed")


