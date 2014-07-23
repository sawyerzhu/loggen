var random = require("random-js")();

var random_data = require('../random_data');

exports.gw_format = {
    "timestamp": {
        "type": "date",
        "format": "MMM DD HH:MI:SS",
        "prefix": ""
    },
    "daemon": {
        "type": "string",
        "default": "ulogd"
    },
    "daemon_id": {
        "type": "number",
        "prefix": "[",
        "suffix": "]:",
        "default": function(format, data, key) {
            return random.integer(1, 5126);
        }
    },
    "activity": {
        "type": "string",
        "default": "DESTROY",
    /*    "default": [
            "NEW",
            "DESTROY"
        ],*/
        "prefix": " [",
        "suffix": "]"
    },
    "gwid": {
        "type": "string",
        "default": "GW20000001"
    },
    "src_public_ip": {
        "type": "ip",
        "default": function() {
            return random_data.random_public_ip();
        }
    },
    "orig": {
        "type": "string",
        "default": "ORIG:"
    },
    "req_src": {
        "type": "ip",
        "prefix": " SRC="
    },
    "req_dst": {
        "type": "ip",
        "prefix": " DST="
    },
    "req_dn": {
        "type": "url",
        "prefix": " DN="
    },
    "req_mac": {
        "type": "mac",
        "prefix": " MAC="
    },
    "req_proto": {
        "type": "string",
        "default": "TCP",
        "prefix": " PROTO="
    },
    "req_spt": {
        "type": "int",
        "prefix": " SPT=",
        "default": function() {
            return random.integer(1, 10);
        }
    },
    "req_dpt": {
        "type": "int",
        "prefix": " DPT=",
        "default": function() {
            return random_data.random_array_data([80, 443]);
        }
    },
    "req_pkts": {
        "type": "int",
        "prefix": " PKTS=",
        "default": function(format, data, key) {
            if (data['activity'] == 'NEW') {
                return 0;
            }

            return random.integer(1, 10);
        }
    },
    "req_bytes": {
        "type": "int",
        "prefix": " BYTES=",
        "default": function(format, data, key) {
            if (data['activity'] == 'NEW') {
                return 0;
            }

            return random.integer(1, 10);
        }
    },
    "reply": {
        "type": "string",
        "prefix": " , ",
        "default": "REPLY:"
    },
    "rsp_src": {
        "type": "ip",
        "prefix": " SRC=",
        "default": function(format, data, key) {
            return data['req_dst'];
        }
    },
    "rsp_dst": {
        "type": "ip",
        "prefix": " DST=",
        "default": function(format, data, key) {
            return data['req_src'];
        }
    },
    "rsp_proto": {
        "type": "string",
        "default": "TCP",
        "prefix": " PROTO=",
        "default": function(format, data, key) {
            return data['req_proto'];
        }
    },
    "rsp_spt": {
        "type": "int",
        "prefix": " SPT=",
        "default": function(format, data, key) {
            return data['req_dpt'];
        }
    },
    "rsp_dpt": {
        "type": "int",
        "prefix": " DPT=",
        "default": function(format, data, key) {
            return data['req_spt'];
        }
    },
    "rsp_pkts": {
        "type": "int",
        "prefix": " PKTS=",
        "default": function(format, data, key) {
            if (data['activity'] == 'NEW') {
                return 0;
            }

            return random.integer(1, 10);
        }
    },
    "rsp_bytes": {
        "type": "int",
        "prefix": " BYTES=",
        "suffix": " ",
        "default": function(format, data, key) {
            if (data['activity'] == 'NEW') {
                return 0;
            }

            return random.integer(1, 1024);
        }
    }
}
