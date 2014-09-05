
var udp = require('./transport/udp');
var redis = require('./transport/redis');

var host = 'localhost';
 var udp_client = new udp.udp_client(host, 514);
var redis_client = new redis.redis_client(host, 6379);

for (var i = 0; i < 1; i++) {

    // var raw_gw_log = 'Jul 27 00:00:00 ulogd[284]: [DESTROY] GW16 221.176.24.154 ORIG: SRC=64.54.35.118 DST=58.110.162.121 DN=www.dropbox.com MAC=ja:ck:01:00:00:00 PROTO=TCP SPT=38372 DPT=443 PKTS=4 BYTES=10 , REPLY: SRC=58.110.162.121 DST=64.54.35.118 PROTO=TCP SPT=443 DPT=38372 PKTS=1 BYTES=679 ';

    var raw_gw_log = 'aaaa'
    udp_client.send(raw_gw_log);


    // var raw_aie_log = "2014-08-18T16:58:31 GW16 AIE16 172.16.0.160:51315:172.16.0.160:3128 2100999 1 0 000 {\"method\":\"GET\",\"user_id\":\"ma7ha6g38chg9tngq69n5b72r6\",\"rsp_code\":\"200\"}";
    // var raw_aie_log = "2014-08-28T01:50:50 gw16 aie_001 10.0.0.84:57638:17.151.224.96:443 1000000 1 0 000 {\"method\":\"POST\",\"user_id\":\"1156549206\",\"rsp_code\":\"421\"}";
    var raw_aie_log = 'aaa';
    redis_client.rpush('aie', raw_aie_log);

}

udp_client && udp_client.close();
redis_client && redis_client.close();
