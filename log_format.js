
var fs = require('fs');

var _ = require('underscore');

var random_data = require('./random_data');

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

function get_aie_activity_format(activity_name) {
    var log_format = require('./aie/aie_format')[activity_name];

    var obj = {};

    for (var key in log_format) {
        obj[key] = {
            "type": "string",
            "default": null,
             "format": null
        };

        _.extend(obj[key], log_format[key]);
    }

    return obj;
}

function get_aie_log_format(activity_name) {
    var copy_new = _.clone(AIE_LOG_HEAD_FORMAT);
    copy_new.activity.format =  get_aie_activity_format(activity_name);

    return copy_new;
}

function get_filed_val(log_format, data, key) {
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

function gen_log(log_format, data) {
    var log = [];

    for (var key in log_format) {
        var field = log_format[key];

        var val = null;

        if (field.type == 'object') {
            object_format = field.format;

            var sub_obj = {};

            for (var child_key in object_format) {
                var child_field = object_format[child_key];

                if (!child_field.key) {
                    throw "Invalid child key: " + JSON.stringify(child_field);
                }

                sub_obj[child_field.key] = get_filed_val(object_format, data, child_key);

                data[child_key] = sub_obj[child_field.key];
            }

            val = JSON.stringify(sub_obj);
        } else {
            val = get_filed_val(log_format, data, key);

            data[key] = val;
        }

        log.push(field.prefix);
        log.push(val);
        log.push(field.suffix);
    }

    return log.join('');
}

function gen_gw_log(data) {
    return gen_log(GW_LOG_FORMAT, data);
}

function gen_aie_log(activity_name, data) {
    return gen_log(get_aie_log_format(activity_name), data);
}

exports.gen_gw_log = gen_gw_log;
exports.gen_aie_log = gen_aie_log;
