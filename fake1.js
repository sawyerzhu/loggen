
require('date-utils');

var random_data = require('./random_data');

var _ = require('underscore');

var log_format = require('./log_format');

var udp = require('./transport/udp');
var redis = require('./transport/redis');


function sendGwLog(log) {
    udp_client.send(log);
    console.log(log);
}

function sendAieLog(log) {
    redis_client.rpush("aie", log);
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

var host = '10.208.2.10';
var udp_client = new udp.udp_client(host, 514);
var redis_client = new redis.redis_client(host, 6379);

var args = process.argv.slice(2);

// visit box every day, every device

// var startDate = new Date(Date.parse('2014-08-01T00:00:00'));
// var endDate = new Date(Date.parse('2014-08-31T00:00:00'));
//
// while (startDate.isBefore(endDate)) {
//
//     var all_user_keys = random_data.get_all_user_info_keys();
//
//     for (var m = 0; m < all_user_keys.length; m++) {
//         var user_info = random_data.random_user_info(all_user_keys[m]);
//
//         for (var n = 0; n < user_info.devices.length; n++) {
//             var device = user_info.devices[n]
//
//             for (var i = 0; i < 3; i++) {
//
//                 var date = new Date(startDate.toFormat('YYYY-MM-DDTHH:MI:SS'));
//                 date.addHours(random_data.random_int(8, 32));
//
//                 var datas = {
//                     "timestamp": function(log_format, data, key) {
//                         return date.toFormat(log_format[key].format);
//                     },
//
//                     "login_name": function() {
//                         return user_info.sub_email;
//                     },
//
//                     "req_mac": function() {
//
//                         return device.mac;
//                     }
//                 };
//
//                 var app = random_data.random_app('1');
//
//                 var logs = log_format.gen_aie_acvitity_path_log(app, random_data.random_app_activity_path(app, 'upload_preview_download'), _.clone(datas));
//
//                 sendAieActivityPathLog(logs);
//             }
//
//         }
//     }
//
//     startDate.addDays(1);
// }

// visit other two SaaS

// var startDate = new Date(Date.parse('2014-08-01T00:00:00'));
// var endDate = new Date(Date.parse('2014-08-31T00:00:00'));
//
// while (startDate.isBefore(endDate)) {
//
//     var all_user_keys = random_data.get_all_user_info_keys();
//
//     for (var m = 0; m < all_user_keys.length; m++) {
//         var user_info = random_data.random_user_info(all_user_keys[m]);
//
//         var device = user_info.devices[1];
//
//         var pre_app;
//
//         for (var n = 0; n < 2; n++) {
//             var app = random_data.random_app();
//
//             while(app.appname == 'Box' || app.appname == pre_app) {
//                 app = random_data.random_app();
//             }
//
//             pre_app = app.appname;
//
//             for (var i = 0; i < 1; i++) {
//
//                 var date = new Date(startDate.toFormat('YYYY-MM-DDTHH:MI:SS'));
//                 date.addHours(random_data.random_int(8, 32));
//
//                 var datas = {
//                     "timestamp": function(log_format, data, key) {
//                         return date.toFormat(log_format[key].format);
//                     },
//
//                     "login_name": function() {
//                         return random_data.random_array_data(user_info.unsub_emails);
//                     },
//
//                     "req_mac": function() {
//                         return device.mac;
//                     }
//                 };
//
//                 var logs = log_format.gen_aie_acvitity_path_log(app, random_data.random_app_activity_path(app, 'upload'), _.clone(datas));
//
//                 sendAieActivityPathLog(logs);
//             }
//
//         }
//
//     }
//
//     startDate.addDays(1);
// }


//Visit twitter, facebook, youtube random

var startDate = new Date(Date.parse('2014-08-01T00:00:00'));
var endDate = new Date(Date.parse('2014-08-31T00:00:00'));

while (startDate.isBefore(endDate)) {

    var all_user_keys = random_data.get_all_user_info_keys();

    for (var m = 0; m < all_user_keys.length; m++) {
        var user_info = random_data.random_user_info(all_user_keys[m]);

        var device = user_info.devices[1];

        var app = random_data.random_app(random_data.random_array_data(['30001', '30002', '30003']));

        for (var i = 0; i < 1; i++) {

            var date = new Date(startDate.toFormat('YYYY-MM-DDTHH:MI:SS'));
            date.addHours(random_data.random_int(8, 32));

            var datas = {
                "timestamp": function(log_format, data, key) {
                    return date.toFormat(log_format[key].format);
                },

                "req_mac": function() {
                    return device.mac;
                },
                req_dn: app.hostname,
                activity: "DESTROY"
            };

            var gw_log = log_format.gen_gw_log(_.clone(datas));
            sendGwLog(gw_log);
        }

    }

    startDate.addDays(1);
}

udp_client.close();
redis_client.close();
