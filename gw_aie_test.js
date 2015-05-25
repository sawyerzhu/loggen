
var udp = require('./transport/udp');
var redis = require('./transport/redis');

var host = 'dev-ds.stratusee.com';
 var udp_client = new udp.udp_client(host, 514);
var redis_client = new redis.redis_client(host, 6379);

for (var i = 0; i < 1; i++) {

    var raw_gw_log = 'Nov 04 00:00:00 ulogd[284]: [DESTROY] fake ORIG: EDGE=221.176.24.154 SRC=64.54.35.118 DST=58.110.162.121 DN=www.dropbox.com MAC=ja:ck:01:00:00:00 PROTO=TCP SPT=38372 DPT=443 PKTS=4 BYTES=10 , REPLY: SRC=58.110.162.121 DST=64.54.35.118 PROTO=TCP SPT=443 DPT=38372 PKTS=1 BYTES=679 ';

    // var raw_gw_log = 'aaaa'
    udp_client.send(raw_gw_log);


    var raw_aie_log = "2014-11-04T00:00:00 fake AIE16 172.16.0.160:51315:172.16.0.160:3128:1 1 -1 1 0 000 0 {\"method\":\"GET\",\"user_id\":\"ma7ha6g38chg9tngq69n5b72r6\",\"rsp_code\":\"200\"}";
    // var raw_aie_log = 'aaa';
    redis_client.rpush('aie', raw_aie_log);

}

udp_client && udp_client.close();
redis_client && redis_client.close();
