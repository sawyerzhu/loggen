var redis = require("redis");

var send_count = 0;

function redis_client(ip, port) {
    this.aie_list_key = "aie";
    this.ip = ip || '54.84.177.105';
    this.port = port || 6379;
    this.client = client = redis.createClient(port, ip);
}

redis_client.prototype.rpush = function(key, msg) {
    send_count++;

    this.client.rpush(key || this.aie_list_key, msg);
}

redis_client.prototype.close = function() {
    this.client.quit();
    console.log("Redis send log count: " + sned_count);
}

exports.redis_client = redis_client;
