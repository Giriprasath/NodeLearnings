/**
 * Created by ggnanasekar on 9/2/2016.
 */
var fs = require('fs');

var readStream  = fs.createReadStream('input.txt');

var writeStream = fs.createWriteStream('output.txt');

//writeStream.write(readStream);

readStream.pipe(writeStream);


console.log('output file created successfully');
