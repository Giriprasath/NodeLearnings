/**
 * Created by ggnanasekar on 8/25/
 *
 *
 * */
var  http = require("http");

http.createServer(function (request,response) {

    response.writeHeader(200,{'Content-Type': 'text/plain'});

    response.end('Hello World\n');
}).listen(8081);


