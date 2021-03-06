
module.exports = function test() {
  var udp = require('../transport/udp');
  var redis = require('../transport/redis');

  var host = '127.0.0.1';
  var redis_client = new redis.redis_client(host, 6379);

  var raw_aie_log = "2015-05-18T00:00:00 fake AIE16 172.16.0.161:38372:54.96.28.28:443:1 1 -1 1 0 000 0 {\"login_name\": \"sawyer@126.com\",\"method\":\"GET\",\"user_id\":\"ma7ha6g38chg9tngq69n5b72r6\",\"rsp_code\":\"200\"}";
    redis_client.rpush('aie', raw_aie_log);

  var raw_aie_log = "2015-05-18T00:00:01 fake AIE16 172.16.0.161:38372:54.96.28.28:443:1 1 -1 1 0 000 0 {\"login_name\": \"sawyer@qq.com\",\"method\":\"GET\",\"user_id\":\"ma7ha6g38chg9tngq69n5b72r6\",\"rsp_code\":\"200\"}";
      redis_client.rpush('aie', raw_aie_log);

  var raw_aie_log = "2015-05-18T00:00:02 fake AIE16 172.16.0.160:38372:54.96.28.28:443:1 1 -1 1 0 000 0 {\"login_name\": \"sawyer@gmail.com\",\"method\":\"GET\",\"rsp_code\":\"200\"}";
  redis_client.rpush('aie', raw_aie_log);

  var raw_aie_log = "2015-05-18T00:00:03 fake AIE16 172.16.0.160:38372:54.96.28.28:443:1 1 -1 1 0 000 0 {\"login_name\": \"sawyer@qq.com\",\"method\":\"GET\",\"rsp_code\":\"200\"}";
  redis_client.rpush('aie', raw_aie_log);

  var raw_aie_log = "2015-05-18T00:00:04 fake AIE16 172.16.0.162:38372:54.96.28.28:443:1 1 -1 1 0 000 0 {\"login_name\": \"jt@126.com\",\"method\":\"GET\",\"rsp_code\":\"200\"}";
  redis_client.rpush('aie', raw_aie_log);

  var raw_aie_log = "2015-05-18T00:00:05 fake AIE16 172.16.0.163:38372:54.96.28.28:443:1 1 -1 1 0 000 0 {\"login_name\": \"jt@126.com\",\"method\":\"GET\",\"rsp_code\":\"200\"}";
  redis_client.rpush('aie', raw_aie_log);

  var raw_aie_log = "2015-05-18T00:00:06 fake AIE16 172.16.0.162:38372:54.96.28.28:443:1 1 -1 1 0 000 0 {\"login_name\": \"sawyer@126.com\",\"method\":\"GET\",\"rsp_code\":\"200\"}";
  redis_client.rpush('aie', raw_aie_log);


  setTimeout(function() {

  redis_client.set("ss_gw_clean#tuple6_2_device_id#fake#172.16.0.163#38372#54.96.28.28#443#tcp", "{\"pdevice_id\":\"ja:ck:03:00:00:00\",\"smac\":\"ja:ck:03:00:00:00\",\"src_pub_ip\":\"221.176.24.154\"}");

  redis_client.set("ss_gw_clean#tuple6_2_device_id#fake#172.16.0.162#38372#54.96.28.28#443#tcp", "{\"pdevice_id\":\"ja:ck:02:00:00:00\",\"smac\":\"ja:ck:02:00:00:00\",\"src_pub_ip\":\"221.176.24.154\"}");

  redis_client.set("ss_gw_clean#tuple6_2_device_id#fake#172.16.0.161#38372#54.96.28.28#443#tcp", "{\"pdevice_id\":\"ja:ck:00:00:00:00\",\"smac\":\"ja:ck:00:00:00:00\",\"src_pub_ip\":\"221.176.24.154\"}");

  redis_client.set("ss_gw_clean#tuple6_2_device_id#fake#172.16.0.160#38372#54.96.28.28#443#tcp", "{\"pdevice_id\":\"ja:ck:01:00:00:00\",\"smac\":\"ja:ck:01:00:00:00\",\"src_pub_ip\":\"221.176.24.154\"}");

  redis_client.close();

  }, 1000)

}
