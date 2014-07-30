
require('date-utils');

var random_data = require('./random_data');

var _ = require('underscore');

var log_format = require('./log_format');

var udp = require('./transport/udp');
var redis = require('./transport/redis');

function sendGwLog(log) {
    // redis_client.rpush("gw", log);
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

// 2014-08-01 - 2014-08-31 Every user using official email to access Box on the all devices every working day. Each working day every user login 1-3 times to Box. Each login to Box, user will do random activities(upload, preview, download, delete file)
function normal_a(startDate, endDate) {

    while (startDate.isBefore(endDate)) {

        if (startDate.getDay() != 0 && startDate.getDay() != 6) {

            var all_user_keys = random_data.get_all_user_info_keys();

            for (var m = 0; m < all_user_keys.length; m++) {
                var user_info = random_data.random_user_info(all_user_keys[m]);

                for (var n = 0; n < user_info.devices.length; n++) {
                    var device = user_info.devices[n];

                    var times = random_data.random_int(1, 3);

                    for (var i = 0; i < times; i++) {

                        var date = startDate.clone();
                        date.addHours(random_data.random_int(0, 8));

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

        }

        startDate.addDays(1);
    }
}

// Normal behavior:  2014-08-01 - 2014-08-31 Each working day every user will access 1-3 random SaaS on the random device using random un-official email.
function normal_b(startDate, endDate) {
    while (startDate.isBefore(endDate)) {

        if (startDate.getDay() != 0 && startDate.getDay() != 6) {
            var all_user_keys = random_data.get_all_user_info_keys();

            for (var m = 0; m < all_user_keys.length; m++) {
                var user_info = random_data.random_user_info(all_user_keys[m]);

                var device = random_data.random_array_data(user_info.devices);

                var pre_app = ['Box'];

                var app_count = random_data.random_int(1, 2);

                for (var n = 0; n < app_count; n++) {
                    var app = random_data.random_app();

                    while(pre_app.indexOf(app.appname) != -1) {
                        app = random_data.random_app();
                    }

                    pre_app.push(app.appname);

                    var times = random_data.random_int(1, 3);

                    for (var i = 0; i < times; i++) {

                        var date = startDate.clone();
                        date.addHours(random_data.random_int(0, 8));

                        var datas = {
                            "timestamp": function(log_format, data, key) {
                                return date.toFormat(log_format[key].format);
                            },

                            "login_name": function() {
                                return random_data.random_array_data(user_info.unsub_emails);
                            },

                            "req_mac": function() {
                                return device.mac;
                            }
                        };

                        var logs = log_format.gen_aie_acvitity_path_log(app, random_data.random_app_activity_path(app, 'login'), _.clone(datas));

                        sendAieActivityPathLog(logs);
                    }

                }

            }

        }

        startDate.addDays(1);
    }

}

//2014-08-01 - 2014-08-31 Each working day random user will use un-offical email to access Facebook, Youtube, Twitter randomly
function normal_c(startDate, endDate) {

    while (startDate.isBefore(endDate)) {

        if (startDate.getDay() != 0 && startDate.getDay() != 6) {

            var all_user_keys = random_data.get_all_user_info_keys();

            for (var m = 0; m < all_user_keys.length; m++) {
                var user_info = random_data.random_user_info(all_user_keys[m]);

                var device = random_data.random_array_data(user_info.devices);

                var app = random_data.random_app(random_data.random_array_data(['30001', '30002', '30003']));

                for (var i = 0; i < 1; i++) {

                    var date = startDate.clone();
                    date.addHours(random_data.random_int(0, 8));

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
        }

        startDate.addDays(1);
    }
}

//Visit 2014-08-01 - 2014-08-31 Each working day every user access gmail 3-10 times on random device.
function normal_d(startDate, endDate) {

    while (startDate.isBefore(endDate)) {

        if (startDate.getDay() != 0 && startDate.getDay() != 6) {

            var all_user_keys = random_data.get_all_user_info_keys();

            for (var m = 0; m < all_user_keys.length; m++) {
                var user_info = random_data.random_user_info(all_user_keys[m]);

                var device = random_data.random_array_data(user_info.devices);

                var app = random_data.random_app(random_data.random_array_data(['10001']));

                var times = random_data.random_int(3, 10);

                for (var i = 0; i < times; i++) {

                    var date = startDate.clone();
                    date.addHours(random_data.random_int(0, 8));

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
        }

        startDate.addDays(1);
    }
}

// 2014-08-01 - 2014-08-31 Each working day every user access unofficial email 3-5 times on random device.
function normal_e(startDate, endDate) {

    while (startDate.isBefore(endDate)) {

        if (startDate.getDay() != 0 && startDate.getDay() != 6) {

            var all_user_keys = random_data.get_all_user_info_keys();

            for (var m = 0; m < all_user_keys.length; m++) {
                var user_info = random_data.random_user_info(all_user_keys[m]);

                var device = random_data.random_array_data(user_info.devices);

                var app = random_data.random_app(random_data.random_array_data(['10002', '10004']));

                var times = random_data.random_int(3, 5);

                for (var i = 0; i < times; i++) {

                    var date = startDate.clone();
                    date.addHours(random_data.random_int(0, 8));

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
        }

        startDate.addDays(1);
    }
}

// Abnormal behavior: Eric access Box 20 times on 2014-08-06
function abnormal_a(startDate) {
    var user_info = random_data.random_user_info('eric@gmail.com');

    var device = user_info.devices[0];

    var app = random_data.random_app('1');

    for (var i = 0; i < 17; i++) {

        var date = startDate.clone();
        date.addHours(random_data.random_int(0, 8));

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

        var logs = log_format.gen_aie_acvitity_path_log(app, random_data.random_app_activity_path(app, 'upload'), _.clone(datas));

        sendAieActivityPathLog(logs);
    }
}

// Abnormal behavior: Simon access OneDrive 30 times on 2014-08-13
function abnormal_b(startDate) {
    var user_info = random_data.random_user_info('simon@gmail.com');

    var device = user_info.devices[0];

    var app = random_data.random_app('21');

    for (var i = 0; i < 30; i++) {

        var date = startDate.clone();
        date.addHours(random_data.random_int(0, 8));

        var datas = {
            "timestamp": function(log_format, data, key) {
                return date.toFormat(log_format[key].format);
            },

            "login_name": function() {
                return user_info.unsub_emails[0];
            },

            "req_mac": function() {
                return device.mac;
            }
        };

        var logs = log_format.gen_aie_acvitity_path_log(app, random_data.random_app_activity_path(app, 'upload'), _.clone(datas));

        sendAieActivityPathLog(logs);
    }
}

// Abnormal behavior: 2014-08-20 File (nodejs.pdf) access by 6 users(julia@yahoo.com, moshe@yahoo.com, olivia@yahoo.com, john@yahoo.com, daniel@yahoo.com, jacob@yahoo.com) on Box, each user access it 5-10 times.
function abnormal_c(startDate) {
    var user_infos = [
        random_data.random_user_info('julia@gmail.com'),
        random_data.random_user_info('moshe@gmail.com'),
        random_data.random_user_info('olivia@gmail.com'),
        random_data.random_user_info('john@gmail.com'),
        random_data.random_user_info('daniel@gmail.com'),
        random_data.random_user_info('jacob@gmail.com')
    ];

    for (var j = 0; j < user_infos.length; j++) {
        var user_info = user_infos[j];

        var device = random_data.random_array_data(user_info.devices);

        var app = random_data.random_app('1');

        var times = random_data.random_int(5, 10);

        for (var i = 0; i < times; i++) {

            var date = startDate.clone();
            date.addHours(random_data.random_int(0, 8));

            var datas = {
                "timestamp": function(log_format, data, key) {
                    return date.toFormat(log_format[key].format);
                },

                "login_name": function() {
                    return user_info.sub_email;
                },

                "req_mac": function() {
                    return device.mac;
                },

                "objs.name": "nodejs.pdf",

                "objs.size": "1024",

                "objs.type": "file"
            };

            var logs = log_format.gen_aie_acvitity_path_log(app, random_data.random_app_activity_path(app, 'preview'), _.clone(datas));

            sendAieActivityPathLog(logs);
        }

    }
}

// Abnormal behavior: 2014-08-11 User Jackson(jackson@gmail.com) access Big file(big_data.zip, 60M) on Box 1 times.
function abnormal_d(startDate) {
    var user_info = random_data.random_user_info('jackson@gmail.com');

    var device = user_info.devices[0];

    var app = random_data.random_app('1');


    for (var i = 0; i < 1; i++) {

        var date = startDate.clone();
        date.addHours(random_data.random_int(0, 8));

        var datas = {
            "timestamp": function(log_format, data, key) {
                return date.toFormat(log_format[key].format);
            },

            "login_name": function() {
                return user_info.sub_email;
            },

            "req_mac": function() {
                return device.mac;
            },

            "objs.name": "big_data.zip",

            "objs.size": 1024 * 1024 * 60,

            "objs.type": "file"
        };

        var logs = log_format.gen_aie_acvitity_path_log(app, random_data.random_app_activity_path(app, 'upload'), _.clone(datas));

        sendAieActivityPathLog(logs);
    }
}

// Abnormal behavior:  2014-08-26 The manager jasckson@gmail.com upload file (business_plan.doc) to Box. The user jack@gmail.com download this file and upload this file to Dropbox with jack@abc.com account.
function abnormal_e(startDate) {
    var jackson_user_info = random_data.random_user_info('jackson@gmail.com');
    var jack_user_info = random_data.random_user_info('jack@gmail.com');

    var app_box = random_data.random_app('1');

    var app_dropbox = random_data.random_app('2');

    // Jackson upload file to Box
    var date = startDate.clone();
    date.addHours(random_data.random_int(0, 4));

    var datas = {
        "timestamp": function(log_format, data, key) {
            return date.toFormat(log_format[key].format);
        },

        "login_name": function() {
            return jackson_user_info.sub_email;
        },

        "req_mac": function() {
            return jackson_user_info.devices[0].mac;
        },

        "objs.name": "business_plan.doc",

        "objs.size": 60,

        "objs.type": "file"
    };

    var logs = log_format.gen_aie_acvitity_path_log(app_box, random_data.random_app_activity_path(app_box, 'upload'), _.clone(datas));
    sendAieActivityPathLog(logs);

    // Jack download file from Box and upload to Dropbox
    var date = startDate.clone();
    date.addHours(random_data.random_int(4, 6));

    var datas = {
        "timestamp": function(log_format, data, key) {
            return date.toFormat(log_format[key].format);
        },

        "login_name": function() {
            return jack_user_info.sub_email;
        },

        "req_mac": function() {
            return jack_user_info.devices[0].mac;
        },

        "objs.name": "business_plan.doc",

        "objs.size": 60,

        "objs.type": "file"
    };
    var logs = log_format.gen_aie_acvitity_path_log(app_box, random_data.random_app_activity_path(app_box, 'download'), _.clone(datas));
    sendAieActivityPathLog(logs);


    var date = startDate.clone();
    date.addHours(random_data.random_int(6, 8));

    var datas = {
        "timestamp": function(log_format, data, key) {
            return date.toFormat(log_format[key].format);
        },

        "login_name": function() {
            return jack_user_info.unsub_emails[0];
        },

        "req_mac": function() {
            return random_data.random_array_data(jack_user_info.devices).mac;
        },

        "objs.name": "business_plan.doc",

        "objs.size": 60,

        "objs.type": "file"
    };

    var logs = log_format.gen_aie_acvitity_path_log(app_dropbox, random_data.random_app_activity_path(app_dropbox, 'upload'), _.clone(datas));
    sendAieActivityPathLog(logs);
}

normal_a(new Date(2014, 7, 1, 8, 0, 0), new Date(2014, 8, 1, 8, 0, 0));
normal_b(new Date(2014, 7, 1, 8, 0, 0), new Date(2014, 8, 1, 8, 0, 0));
normal_c(new Date(2014, 7, 1, 8, 0, 0), new Date(2014, 8, 1, 8, 0, 0));
normal_d(new Date(2014, 7, 1, 8, 0, 0), new Date(2014, 8, 1, 8, 0, 0));
normal_e(new Date(2014, 7, 1, 8, 0, 0), new Date(2014, 8, 1, 8, 0, 0));

abnormal_a(new Date(2014, 7, 6, 8, 0, 0));
abnormal_b(new Date(2014, 7, 13, 8, 0, 0));
abnormal_c(new Date(2014, 7, 20, 8, 0, 0));
abnormal_d(new Date(2014, 7, 11, 8, 0, 0));
abnormal_e(new Date(2014, 7, 26, 8, 0, 0));

udp_client.close();
redis_client.close();
