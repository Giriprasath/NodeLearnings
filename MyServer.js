/**
 * Created by ggnanasekar on 9/9/2016.
 */

var net = require('net');

var server = net.createServer(function(con) {

        console.log("client connected");

        con.on('end', function () {

            console.log('clinet disconnected');
        });
    con.write("Paypal Businees account")
    con.pipe(con);

    }
);
server.listen('8080',function(){
    console.log("Listening in port 8080");
});
if(server)
{
    console.log("Server Created")
}
else
{
    console.log("No Server");
}
