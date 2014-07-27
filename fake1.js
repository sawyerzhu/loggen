
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

var startDate = new Date(Date.parse('2014-08-01T00:00:00'));
var endDate = new Date(Date.parse('2014-08-31T00:00:00'));

while (startDate.isBefore(endDate)) {

    var all_user_keys = random_data.get_all_user_info_keys();

    for (var m = 0; m < all_user_keys.length; m++) {
        var user_info = random_data.random_user_info(all_user_keys[m]);

        for (var n = 0; n < user_info.devices.length; n++) {
            var device = user_info.devices[n]

            for (var i = 0; i < 3; i++) {

                var date = new Date(startDate.toFormat('YYYY-MM-DDTHH:MI:SS'));
                date.addHours(random_data.random_int(8, 24));

                var datas = {
                    "timestamp": function(log_format, data, key) {
                        return date.toFormat(log_format[key].format);
                    },

                    "login_name": function() {
                        return user_info.sub_email;
                    },

                    "req_mac": function() {

                        return device.mac;
                    }
                };

                var app = random_data.random_app('1');

                var logs = log_format.gen_aie_acvitity_path_log(app, random_data.random_app_activity_path(app, 'upload_preview_download'), _.clone(datas));

                sendAieActivityPathLog(logs);
            }

        }
    }

    startDate.addDays(1);
}

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
//                 date.addHours(random_data.random_int(8, 24));
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
//         var app = random_data.random_app(random_data.random_array_data(['30001', '30002', '30003']));
//
//         for (var i = 0; i < 1; i++) {
//
//             var date = new Date(startDate.toFormat('YYYY-MM-DDTHH:MI:SS'));
//             date.addHours(random_data.random_int(8, 24));
//
//             var datas = {
//                 "timestamp": function(log_format, data, key) {
//                     return date.toFormat(log_format[key].format);
//                 },
//
//                 "req_mac": function() {
//                     return device.mac;
//                 },
//                 req_dn: app.hostname,
//                 activity: "DESTROY"
//             };
//
//             var gw_log = log_format.gen_gw_log(_.clone(datas));
//             sendGwLog(gw_log);
//         }
//
//     }
//
//     startDate.addDays(1);
// }

// Abnormal behavior: Eric access Box 20 times on 2014-08-06

// var user_info = random_data.random_user_info('eric@gmail.com');
//
// var device = user_info.devices[0];
//
// var startDate = new Date(Date.parse('2014-08-06T00:00:00'));
//
// var app = random_data.random_app('1');
//
// for (var i = 0; i < 17; i++) {
//
//      var date = new Date(startDate.toFormat('YYYY-MM-DDTHH:MI:SS'));
//     date.addHours(random_data.random_int(8, 24));
//
//     var datas = {
//         "timestamp": function(log_format, data, key) {
//             return date.toFormat(log_format[key].format);
//         },
//
//         "login_name": function() {
//             return user_info.sub_email;
//         },
//
//         "req_mac": function() {
//             return device.mac;
//         }
//     };
//
//     var logs = log_format.gen_aie_acvitity_path_log(app, random_data.random_app_activity_path(app, 'upload'), _.clone(datas));
//
//     sendAieActivityPathLog(logs);
// }

// Abnormal behavior: Simon access OneDrive 30 times on 2014-08-13

// var user_info = random_data.random_user_info('simon@gmail.com');
//
// var device = user_info.devices[0];
//
// var startDate = new Date(Date.parse('2014-08-13T00:00:00'));
//
// var app = random_data.random_app('21');
//
// for (var i = 0; i < 30; i++) {
//
//     var date = new Date(startDate.toFormat('YYYY-MM-DDTHH:MI:SS'));
//     date.addHours(random_data.random_int(8, 24));
//
//     var datas = {
//         "timestamp": function(log_format, data, key) {
//             return date.toFormat(log_format[key].format);
//         },
//
//         "login_name": function() {
//             return user_info.unsub_emails[0];
//         },
//
//         "req_mac": function() {
//             return device.mac;
//         }
//     };
//
//     var logs = log_format.gen_aie_acvitity_path_log(app, random_data.random_app_activity_path(app, 'upload'), _.clone(datas));
//
//     sendAieActivityPathLog(logs);
// }


// Abnormal behavior: 2014-08-20 File (nodejs.pdf) access by 6 users(julia@yahoo.com, moshe@yahoo.com, olivia@yahoo.com, john@yahoo.com, daniel@yahoo.com, jacob@yahoo.com) on Box, each user access it 5 times.

// var user_infos = [
//     random_data.random_user_info('julia@gmail.com'),
//     random_data.random_user_info('moshe@gmail.com'),
//     random_data.random_user_info('olivia@gmail.com'),
//     random_data.random_user_info('john@gmail.com'),
//     random_data.random_user_info('daniel@gmail.com'),
//     random_data.random_user_info('jacob@gmail.com')
// ];
//
// for (var j = 0; j < user_infos.length; j++) {
//     var user_info = user_infos[j];
//
//     var device = user_info.devices[0];
//
//     var startDate = new Date(Date.parse('2014-08-20T00:00:00'));
//
//     var app = random_data.random_app('1');
//
//
//     for (var i = 0; i < 5; i++) {
//
//         var date = new Date(startDate.toFormat('YYYY-MM-DDTHH:MI:SS'));
//         date.addHours(random_data.random_int(8, 24));
//
//         var datas = {
//             "timestamp": function(log_format, data, key) {
//                 return date.toFormat(log_format[key].format);
//             },
//
//             "login_name": function() {
//                 return user_info.sub_email;
//             },
//
//             "req_mac": function() {
//                 return device.mac;
//             },
//
//             "objs.name": "nodejs.pdf",
//
//             "objs.size": "1024",
//
//             "objs.type": "file"
//         };
//
//         var logs = log_format.gen_aie_acvitity_path_log(app, random_data.random_app_activity_path(app, 'preview'), _.clone(datas));
//
//         sendAieActivityPathLog(logs);
//     }
//
// }


// Abnormal behavior: 2014-08-11 User Jackson(jackson@gmail.com) access Big file(big_data.zip, 60M) on Box 1 times.

// var user_info = random_data.random_user_info('jackson@gmail.com');
//
// var device = user_info.devices[0];
//
// var startDate = new Date(Date.parse('2014-08-20T00:00:00'));
//
// var app = random_data.random_app('1');
//
//
// for (var i = 0; i < 1; i++) {
//
//     var date = new Date(startDate.toFormat('YYYY-MM-DDTHH:MI:SS'));
//     date.addHours(random_data.random_int(8, 24));
//
//     var datas = {
//         "timestamp": function(log_format, data, key) {
//             return date.toFormat(log_format[key].format);
//         },
//
//         "login_name": function() {
//             return user_info.sub_email;
//         },
//
//         "req_mac": function() {
//             return device.mac;
//         },
//
//         "objs.name": "big_data.zip",
//
//         "objs.size": 1024 * 1024 * 60,
//
//         "objs.type": "file"
//     };
//
//     var logs = log_format.gen_aie_acvitity_path_log(app, random_data.random_app_activity_path(app, 'upload'), _.clone(datas));
//
//     sendAieActivityPathLog(logs);
// }

// Abnormal behavior: 2014-08-26 User Jack upload file (business_plan.doc) to Box(jack@gmail.com) and Dropbox(jack@abc.com)
//
// var user_info = random_data.random_user_info('jack@gmail.com');
//
// var device = user_info.devices[0];
//
// var startDate = new Date(Date.parse('2014-08-20T00:00:00'));
//
// var app = random_data.random_app('1');
//
// var app_onedrive = random_data.random_app('21');
//
//
// for (var i = 0; i < 1; i++) {
//
//     var date = new Date(startDate.toFormat('YYYY-MM-DDTHH:MI:SS'));
//     date.addHours(random_data.random_int(8, 24));
//
//     var datas = {
//         "timestamp": function(log_format, data, key) {
//             return date.toFormat(log_format[key].format);
//         },
//
//         "login_name": function() {
//             return user_info.sub_email;
//         },
//
//         "req_mac": function() {
//             return device.mac;
//         },
//
//         "objs.name": "business_plan.doc",
//
//         "objs.size": 60,
//
//         "objs.type": "file"
//     };
//
//     var logs = log_format.gen_aie_acvitity_path_log(app, random_data.random_app_activity_path(app, 'upload'), _.clone(datas));
//     sendAieActivityPathLog(logs);
//
//     var logs = log_format.gen_aie_acvitity_path_log(app_onedrive, random_data.random_app_activity_path(app_onedrive, 'upload'), _.clone(datas));
//     sendAieActivityPathLog(logs);
//
// }

udp_client.close();
redis_client.close();
