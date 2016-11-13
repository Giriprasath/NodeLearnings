/**
 * Created by ggnanasekar on 9/15/2016.
 */

var http = require('http');
var url =  require('url');
var fs = require('fs');

var server = http.createServer(function (request,response) {

   var fileName =  url.parse(request.url).pathname;

    console.log("Opening file" + fileName.substr(1));

    fs.readFile(fileName.substr(1),function (err,data) {


        if(err)
        {
            console.log(err.toString());
            response.writeHead(404, {'Content-Type': 'text/html'});
            response.write(err.toString());
        }

        else
        {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data.toString());
        }

        response.end();
    });


});

server.listen(8081);
console.log('Server running at http://127.0.0.1:8081/');