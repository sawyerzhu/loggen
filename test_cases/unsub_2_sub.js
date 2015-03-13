

var udp = require('../transport/udp');
var redis = require('../transport/redis');

var host = '127.0.0.1';
// var udp_client = new udp.udp_client(host, 514);
var redis_client = new redis.redis_client(host, 6379);

var raw_gw_log = 'Nov 04 00:00:00 ulogd[284]: [DESTROY] GW16 ORIG: EDGE=221.176.24.154 SRC=172.16.0.160 DST=54.96.28.28 DN=www.box.com SMAC=ja:ck:01:00:00:00 PROTO=TCP SPT=38372 DPT=443 PKTS=4 BYTES=10 , REPLY: SRC=54.96.28.28 DST=172.16.0.160 PROTO=TCP SPT=443 DPT=38372 PKTS=1 BYTES=679 ';
redis_client.rpush('gw', raw_gw_log);

// setTimeout(function() {
var raw_aie_log = "2014-11-04T00:00:00 GW16 AIE16 172.16.0.160:38372:54.96.28.28:443:1 1 -1 1 0 000 0 {\"login_name\": \"sawyer@126.com\",\"method\":\"GET\",\"rsp_code\":\"200\"}";
redis_client.rpush('aie', raw_aie_log);

var raw_aie_log = "2014-11-04T00:00:00 GW16 AIE16 172.16.0.160:38372:54.96.28.28:443:1 1 -1 1 0 000 0 {\"login_name\": \"sawyer@gmail.com\",\"method\":\"GET\",\"rsp_code\":\"200\"}";
redis_client.rpush('aie', raw_aie_log);



//

// var raw_gw_log = 'Nov 04 00:00:00 ulogd[284]: [DESTROY] GW16 ORIG: EDGE=221.176.24.154 SRC=172.16.0.161 DST=54.96.28.28 DN=www.box.com SMAC=ja:ck:00:00:00:00 PROTO=TCP SPT=38372 DPT=443 PKTS=4 BYTES=10 , REPLY: SRC=54.96.28.28 DST=172.16.0.161 PROTO=TCP SPT=443 DPT=38372 PKTS=1 BYTES=679 ';
// redis_client.rpush('gw', raw_gw_log);
//
// var raw_aie_log = "2014-11-04T00:00:00 GW16 AIE16 172.16.0.161:38372:54.96.28.28:443 1 -1 1 0 000 0 {\"login_name\": \"sawyer@126.com\",\"method\":\"GET\",\"user_id\":\"ma7ha6g38chg9tngq69n5b72r6\",\"rsp_code\":\"200\"}";
// redis_client.rpush('aie', raw_aie_log);

redis_client.close();
// udp_client && udp_client.close();

// }, 100)
