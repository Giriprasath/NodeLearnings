/**
 * Created by ggnanasekar on 9/1/2016.
 */

var fs = require('fs');

var data = fs.readFile('input.txt',function (err,data) {

    if(err) console.error(err);
    console.log(data.toString());
})

console.log("program completed");
