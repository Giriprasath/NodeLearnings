/**
 * Created by ggnanasekar on 9/1/2016.
 */
var fs = require('fs');
var data='';

var readerStream =fs.createReadStream('input.txt');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
    data += chunk;
});

readerStream.on('end',function(){
    console.log(data);
});

readerStream.on('error', function(err){
    console.log(err.stack);
});

console.log("Program Ended");