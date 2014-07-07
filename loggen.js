
require('date-utils');

var random_data = require('./random_data');

var _ = require('underscore');

var log_format = require('./log_format');

var udp = require('./transport/udp');
var redis = require('./transport/redis');

var host = '127.0.0.1'; //'127.0.0.1'  '54.84.177.105'
var udp_client = new udp.udp_client(host, 514);
var redis_client = new redis.redis_client(host, 6379);

var args = process.argv.slice(2);

var startDate = new Date(Date.parse('2014-01-01T00:00:00'));
var endDate = new Date(Date.parse('2014-09-01T00:00:00'));

while (startDate.isBefore(endDate)) {

    for (var i = 0; i < 10; i++) {

        var date = new Date(startDate.toFormat('YYYY-MM-DDTHH:MI:SS'));
        date.addHours(random_data.random_int(1, 15));

        var datas = {
            "timestamp": function(log_format, data, key) {
                return date.toFormat(log_format[key].format);
            }
        };

        var gw_log = log_format.gen_gw_log(_.clone(datas));
        udp_client.send(gw_log);
        console.log(gw_log);

        var aie_l2_login_log = log_format.gen_aie_log('aie_l2_login', _.clone(datas));
        redis_client.rpush("aie", aie_l2_login_log);
        console.log(aie_l2_login_log);

        var aie_l2_log = log_format.gen_aie_log('aie_l2', _.clone(datas));
        redis_client.rpush("aie", aie_l2_log);
        console.log(aie_l2_log);

        var aie_l3_log = log_format.gen_aie_log('aie_l3', _.clone(datas));
        redis_client.rpush("aie", aie_l3_log);
        console.log(aie_l3_log);
    }

    startDate.addDays(1);
}

udp_client.close();
redis_client.close();
