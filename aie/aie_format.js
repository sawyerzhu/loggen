var random = require("random-js")();

var random_data = require('../random_data');

var app_id_2_app = random_data.app_id_2_app;

exports.aie_head = {
    "timestamp": {
        "type": "date",
        "format": "YYYY-MM-DDTHH24:MI:SS",
        "prefix": ""
    },

    "gw_id": {
        "type": "string",
        "default": "GW20000001"
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

    "log_type": {
      "type": "int",
      "default": 1
    },

    "sig_id": {
        "type": "int"
    },

    "sig_ver": {
        "type": "int",
        "default": 1
    },

    "log_id": {
        "type": "int",
        "default": '0'
    },

    "log_seq_num": {
        "type": "int",
        "default": '0'
    },

    "log_lf": {
        "type": "int",
        "default": '0'
    },

    "activity": {
        "type": "object"
    }
};
