
var http = require('http');

var urlpath = {
        host: 'localhost',
        port :  '8081',
        path : '/input.txt'
};

var showResponse = function (resp) {

    var body='';
    resp.on('data',function (data) {
        body+=data;
    });

    resp.on('end',function () {
        console.log(body);
    })
}
var request = http.request(urlpath,showResponse);
request.end();
