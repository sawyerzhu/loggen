
require('date-utils');

var random_data = require('./random_data');

var _ = require('underscore');

var log_format = require('./log_format');

var udp = require('./transport/udp');
var redis = require('./transport/redis');


function sendGwLog(log) {
    // udp_client.send(log);
    console.log(log);
}

function sendAieLog(log) {
    // redis_client.rpush("aie", log);
    console.log(log);
}

function sendAieAndGwLog(log) {
     sendGwLog(log.gw);
    sendAieLog(log.aie)
}

function sendAieActivityPathLog(logs) {
    for (var m = 0; m < logs.length; m++) {
        var log = logs[m];

        sendAieAndGwLog(log);
    }
}

var host = 'ds.stratusee.com'; //'127.0.0.1'
var udp_client = new udp.udp_client(host, 514);
var redis_client = new redis.redis_client(host, 6379);

var args = process.argv.slice(2);

var startDate = new Date(Date.parse('2014-01-01T00:00:00'));
var endDate = new Date(Date.parse('2014-09-01T00:00:00'));

while (startDate.isBefore(endDate)) {

    for (var i = 0; i < 10; i++) {

        var date = new Date(startDate.toFormat('YYYY-MM-DDTHH:MI:SS'));
        date.addHours(random_data.random_int(1, 15));

        var user_info = random_data.random_user_info();


        var datas = {
            "timestamp": function(log_format, data, key) {
                return date.toFormat(log_format[key].format);
            },

            "login_name": function() {
                var mails = _.clone(user_info.unsub_emails);
                mails.push(user_info.sub_email);

                return random_data.random_array_data(mails);
            },

            "req_mac": function() {

                var device = random_data.random_array_data(user_info.devices);

                return device.mac;
            }
        };

        var gw_log = log_format.gen_gw_log(_.clone(datas));
        sendGwLog(gw_log);

        var app = random_data.random_app();

        var logs = log_format.gen_aie_acvitity_path_log(app, random_data.random_app_activity_path(app), _.clone(datas));

        sendAieActivityPathLog(logs)
    }

    startDate.addDays(1);
}

udp_client.close();
redis_client.close();
