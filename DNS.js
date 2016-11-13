
var dns = require('dns');

dns.lookup('edge-star-mini-shv-01-dft4.facebook.com', function onLookup(err, address, family) {
    console.log('address:', address);
    dns.reverse(address, function (err, hostnames) {
        if (err) {
            console.log(err.stack);
        }

        console.log('reverse for ' + address + ': ' + JSON.stringify(hostnames));
    });
});
