var random = require("random-js")();

var random_data = require('../random_data');

var app_times = 100000;

var sig_2_app = {
    "1": {
        "appname": "Box",
        "hostname": "www.box.com",
        "category": "storage"
    },

    "2": {
        "appname": "Dropbox",
        "hostname": "www.dropbox.com",
        "category": "storage"
    },

    "3": {
        "appname": "GoogleDrive",
        "hostname": "www.gdrive.com",
        "category": "storage"
    },

    "4": {
        "appname": "ShareFile",
        "hostname": "www.sharefile.com",
        "category": "storage"
    },

    "5": {
        "appname": "SugarSync",
        "hostname": "www.sugarsync.com",
        "category": "storage"
    },

    "6": {
        "appname": "DropSend",
        "hostname": "www.dropsend.com",
        "category": "storage"
    },

    "7": {
        "appname": "PhotoBucket",
        "hostname": "www.photobucket.com",
        "category": "storage"
    },

    "8": {
        "appname": "SkyPath",
        "hostname": "www.skypath.com",
        "category": "storage"
    },

    "9": {
        "appname": "icloud",
        "hostname": "www.icloud.com",
        "category": "storage"
    },

    "10": {
        "appname": "SyncPlicity",
        "hostname": "www.syncplicity.com",
        "category": "storage"
    },

    "11": {
        "appname": "Hightail",
        "hostname": "www.hightail.com",
        "category": "storage"
    },

    "12": {
        "appname": "SyncPlicity",
        "hostname": "www.syncplicity.com",
        "category": "storage"
    },

    "13": {
        "appname": "MicrosoftSkyDrive",
        "hostname": "www.msskydrive.com",
        "category": "storage"
    },

    "14": {
        "appname": "HighTail",
        "hostname": "www.hightail.com",
        "category": "storage"
    },

    "15": {
        "appname": "Wuala",
        "hostname": "www.wuala.com",
        "category": "storage"
    },

    "16": {
        "appname": "Egnyte",
        "hostname": "www.ngnyte.com",
        "category": "storage"
    },

    "17": {
        "appname": "WeTransfer",
        "hostname": "www.wetransfer.com",
        "category": "storage"
    },

    "18": {
        "appname": "Accelion",
        "hostname": "www.accelion.com",
        "category": "storage"
    },

    "19": {
        "appname": "LiveDrive",
        "hostname": "www.livedrive.com",
        "category": "storage"
    },

    "20": {
        "appname": "JungleDisk",
        "hostname": "www.jungledisk.com",
        "category": "storage"
    },

    "21": {
        "appname": "OneDrive",
        "hostname": "www.onedrive.com",
        "category": "storage"
    }
}

exports.aie_head = {
    "timestamp": {
        "type": "date",
        "format": "YYYY-MM-DDTHH:MI:SS",
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
        "default": 123,
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
        "type": "int",
        "default": ["100001", "200001", "300001", "400001", "500001", "600001", "700001", "800001", "900001", "1000001", "1100001", "1200001", "1300001", "1400001", "1500001", "1600001", "1700001", "1800001", "1900001", "2000001", "2100001"]
    },

    "sig_ver": {
        "type": "int",
        "default": 1
    },

    "activity": {
        "type": "object"
    }
};


exports.aie_l2_login = {

    "hostname": {
        "type": "url",
        "key": "hostname",
        "default": function(format, data, key) {
            var sig_id = Math.floor(data['sig_id'] / app_times);

            var app_info = sig_2_app['' + sig_id];

            if (app_info) {
                return app_info.hostname;
            }

            return "www.saleforce.com";
        }
    },

    "login_name": {
        "type": "email",
        "key": "login_name"
    },

    "user_agent": {
        "type": "user_agent",
        "key": "user_agent"
    },

    "success": {
        "type": "bool",
        "key": "success",
        "default": function() {
            return random_data.random_array_data([true, true, true, true, true, true, true, true, false]);
        }
    },

    "activity": {
        "type": "string",
        "key": "activity",
        "default": "login"
    },

    "appname": {
        "type": "string",
        "key": "appname",
        "default": function(format, data, key) {
            var sig_id = Math.floor(data['sig_id'] / app_times);

            var app_info = sig_2_app['' + sig_id];

            if (app_info) {
                return app_info.appname;
            }

            return "unknown";

        }
    }
}

exports.aie_l2 = {
    "rsp_code": {
        "type": "rsp_code",
        "key": "rsp_code"
    },

    "method": {
        "type": "http_method",
        "key": "method"
    },

    "hostname": {
        "type": "url",
        "key": "hostname",
        "default": function(format, data, key) {
            var sig_id = Math.floor(data['sig_id'] / app_times);

            var app_info = sig_2_app['' + sig_id];

            if (app_info) {
                return app_info.hostname;
            }

            return "www.saleforce.com";

        }
    },

    "login_name": {
        "type": "email",
        "key": "login_name"
    },

    "user_agent": {
        "type": "user_agent",
        "key": "user_agent"
    },

    "appname": {
        "type": "string",
        "key": "appname",
        "default": function(format, data, key) {
            var sig_id = Math.floor(data['sig_id'] / app_times);

            var app_info = sig_2_app['' + sig_id];

            if (app_info) {
                return app_info.appname;
            }

            return "unknown";

        }
    }
}

exports.aie_l3 = {
    "rsp_code": {
        "type": "rsp_code",
        "key": "rsp_code"
    },

    "method": {
        "type": "http_method",
        "key": "method"
    },

    "hostname": {
        "type": "url",
        "key": "hostname",
        "default": function(format, data, key) {
            var sig_id = Math.floor(data['sig_id'] / app_times);

            var app_info = sig_2_app['' + sig_id];

            if (app_info) {
                return app_info.hostname;
            }

            return "www.saleforce.com";

        }
    },

    "login_name": {
        "type": "email",
        "key": "login_name"
    },

    "appname": {
        "type": "string",
        "key": "appname",
        "default": function(format, data, key) {
            var sig_id = Math.floor(data['sig_id'] / app_times);

            var app_info = sig_2_app['' + sig_id];

            if (app_info) {
                return app_info.appname;
            }

            return "unknown";

        }
    },

    "activity": {
        "type": "string",
        "key": "activity",
        "default": ["preview", "upload", "download", "update", "delete"]
    },

    "name": {
        "type": "file_name",
        "key": "name"
    },

    "file_type": {
        "type": "string",
        "key": "file_type",
        "default": ["folder", "file"]
    }
}
