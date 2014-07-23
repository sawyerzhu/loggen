var dgram = require('dgram');

var send_count = 0;
var complete_count = 0;
var try_close_count = 0;

function udp_client(ip, port) {
    this.ip = ip || '54.84.177.105';
    this.port = port || 514;
    this.client = dgram.createSocket("udp4");
}

udp_client.prototype.send = function(msg, cb) {
    send_count++;
    var message = new Buffer(msg);

    this.client.send(message, 0, message.length, this.port, this.ip, function(err, bytes) {
        if (err) {
            console.log(err);
        }

        complete_count++;

        cb && cb(err, bytes);
    });
}

udp_client.prototype.close = function() {
    var me = this;

    if (complete_count == send_count) {
        console.log("UDP send log count: " + send_count);

        this.client.close();
    } else {
        var t = setInterval(function() {
            if (complete_count == send_count || try_close_count == 60) {
                console.log("UDP send log count: " + send_count);

                clearInterval(t);

                me.client.close();
            }

            try_close_count++;
        }, 1000);
    }
}

exports.udp_client = udp_client;
