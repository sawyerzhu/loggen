
var fs = require('fs');

var _ = require('underscore');

var random_data = require('./random_data');
var app_id_2_app = random_data.app_id_2_app;

var GW_LOG_FORMAT = (function() {

    var log_format = require('./gw/gw_format').gw_format;

    var obj = {};

    for (var key in log_format) {
        obj[key] = {
            "type": "string",
            "default": null,
            "prefix": " ",
            "suffix": ""
        };

        _.extend(obj[key], log_format[key]);
    }

    return obj;
})();

var AIE_LOG_HEAD_FORMAT = (function() {

    var log_format = require('./aie/aie_format').aie_head;

    var obj = {};

    for (var key in log_format) {
        obj[key] = {
            "type": "string",
            "default": null,
            "prefix": " ",
            "suffix": ""
        };

        _.extend(obj[key], log_format[key]);
    }

    return obj;
})();

function get_aie_log_format(activity_obj) {
    var copy_new = _.clone(AIE_LOG_HEAD_FORMAT);
    copy_new.activity.format =  activity_obj;

    return copy_new;
}

function get_field_val(log_format, data, key) {
    var field = log_format[key];

    var val = null;

    if (data[key]) {

        if (_.isFunction(data[key])) {
            val = (data[key])(log_format, data, key);
        } else {
            val = data[key];
        }

    } else if (field.default) {

        if (_.isFunction(field.default)) {
            val = (field.default)(log_format, data, key);
        } else if (_.isArray(field.default)) {
            val = random_data.random_array_data(field.default);
        } else {
            val = field.default;
        }

    } else {
        val = random_data.random_data(field.type, field.format);
    }

    return val;
}

function gen_obj_val(log_format, field, data) {
    var object_format = field.format;

    var sub_obj = {};

    for (var child_key in object_format) {
        var child_field = object_format[child_key];

        if (!child_field.key) {
            child_field.key = child_key;
        }

        if (child_field.type === 'object') {
            sub_obj[child_field.key] = gen_obj_val(log_format, child_field, data);
        } else if (child_field.type === 'object_array') {
            sub_obj[child_field.key] = [gen_obj_val(log_format, child_field, data)];
        } else {
            sub_obj[child_field.key] = get_field_val(object_format, data, child_key);
        }

        data[child_key] = sub_obj[child_field.key];
    }

    return sub_obj;
}

function gen_log(log_format, data) {
    var log = [];

    for (var key in log_format) {
        var field = log_format[key];

        var val = null;

        if (field.type == 'object') {
            var sub_obj = gen_obj_val(log_format, field, data)

            val = JSON.stringify(sub_obj);
        } else {
            val = get_field_val(log_format, data, key);

            data[key] = val;
        }

        log.push(field.prefix);
        log.push(val);
        log.push(field.suffix);
    }
    //console.log(JSON.stringify(data));
    return log.join('');
}

function gen_gw_log(data) {
    return gen_log(GW_LOG_FORMAT, data);
}

function gen_aie_log(app, sig_id, data) {
    if (!app.activities || !app.activities['' + sig_id]) {
        throw "Unknow app(" + app.appname + ") with sig id: " + sig_id;
    }

    var sig_info = app.activities['' + sig_id];

    var obj = {
        "appname": {
            "type": "string",
            "key": "appname"
        },

        "category": {
            "type": "string",
            "key": "category"
        },

        "login_name": {
            "type": "email",
            "key": "login_name"
        },

        "activity": {
            "key": "activity",
            "type": "string",
            "default": null,
            "format": null
        }
    };

    for (var key in sig_info.keys) {
        obj[key] = {
            "type": "string",
            "default": null,
            "format": null
        };

        _.extend(obj[key], sig_info.keys[key]);
    }

    _.extend(data, {
        sig_id: sig_id,
        appname: app.appname,
        hostname: app.hostname,
        category: app.category,
        activity: sig_info.name
    });

    return gen_log(get_aie_log_format(obj), data);
}

function gen_aie_and_gw_log(app, sig_id, data) {
    var aie_log = gen_aie_log(app, sig_id, data);

    gw_data = _.extend(_.clone(data), {
        timestamp: (new Date(Date.parse(data.timestamp))).toFormat("MMM DD HH24:MI:SS"),
        req_src: data.src_ip,
        req_dst: data.dst_ip,
        req_spt: data.src_port,
        req_dpt: data.dst_port,
        req_dn: data.hostname,
        activity: "DESTROY"
    });

    var gw_log = gen_gw_log(gw_data);

    return {
        aie: aie_log,
        gw: gw_log
    }
}

function gen_aie_acvitity_path_log(app, activity_path, data) {
    var logs = [];

    if (!activity_path) {
        console.log(JSON.stringify(app));
    }

    for (var i = 0; i < activity_path.length; i++) {
        logs.push(gen_aie_and_gw_log(app, activity_path[i], data));
    }

    return logs;
}

exports.gen_gw_log = gen_gw_log;
exports.gen_aie_log = gen_aie_log;
exports.gen_aie_and_gw_log = gen_aie_and_gw_log;
exports.gen_aie_acvitity_path_log = gen_aie_acvitity_path_log;
