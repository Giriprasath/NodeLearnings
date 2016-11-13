/**
 * Created by ggnanasekar on 9/7/2016.
 */
var fs = require('fs');
var buf = new Buffer(1024);

var fileHandler = function fileHandler(err,data){

    if(err)
        console.log(err.toString());
    console.log(data);
    fs.read(data, buf, 0, buf.length, 0, function(err, bytes){
        if (err){
            console.log(err);
        }
        console.log(bytes + " bytes read");

        // Print only read bytes to avoid junk.
        if(bytes > 0){
            console.log(buf.slice(0, bytes).toString());
        }
    });


}
fs.open('input.txt','r',fileHandler);

