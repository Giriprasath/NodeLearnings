/**
 * Created by ggnanasekar on 9/2/2016.
 */
var fs = require('fs');
var zip = require('zlib');

fs.createReadStream('input.txt.gz')
    .pipe(zip.createUnzip())
    .pipe(fs.createWriteStream('uncompressed_input.txt'))

console.log('File uncompressed ')
