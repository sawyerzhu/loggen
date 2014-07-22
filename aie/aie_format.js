var random = require("random-js")();

var random_data = require('../random_data');

var app_times = 100000;

var app_id_2_app = random_data.app_id_2_app;

exports.aie_head = {
    "timestamp": {
        "type": "date",
        "format": "YYYY-MM-DDTHH:MI:SS",
        "prefix": ""
    },

    "gw_id": {
        "type": "string",
        "default": "GW30000001"
    },

    "aie_id": {
        "type": "string",
        "default": "AIE20000001",
    },

    "src_ip": {
        "type": "ip"
    },

    "src_port": {
        "type": "int",
        "prefix": ":"
    },

    "dst_ip": {
        "type": "ip",
        "prefix": ":"
    },

    "dst_port": {
        "type": "int",
        "default": 443,
        "prefix": ":"
    },

    "sig_id": {
        "type": "int"
    },

    "sig_ver": {
        "type": "int",
        "default": 1
    },

    "activity": {
        "type": "object"
    }
};
