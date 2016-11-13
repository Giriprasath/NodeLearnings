/**
 * Created by ggnanasekar on 9/2/2016.
 */
var fs = require('fs');
var zip = require('zlib');

fs.createReadStream('input.txt')
    .pipe(zip.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'))

console.log("File compressed");