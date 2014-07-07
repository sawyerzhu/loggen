
var random = require("random-js")();

var random_str = require('random-string');

require('date-utils');

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

var type_2_value = {
    "string": function() {
        return random_string();
    },

    "int": function(min, max) {
        return random_int(min, max);
    },

    "date": function(format, defval) {
        return random_date_data(format, defval);
    },

    "ip": function(format, defval) {
        if ('ipv6' == format) {
            return "fe80::5ef9:38ff:fe8d:b764";
        }

        return random.integer(1, 255) + "." + random.integer(1, 255) + "." + random.integer(1, 255) + "." + random.integer(1, 255);
    },

    "url": function(format, defval) {
        return random_array_data([
            "www.box.com",
            "www.dropbox.com",
            "www.saleforce.com"
        ]);
    },

    "user_agent": function() {
        return random_user_agent();
    },

    "rsp_code": function() {
        return random_rsp_code();
    },

    "http_method": function() {
        return random_http_method();
    },

    "person_name": function() {
        return random_person_name();
    },

    "email": function() {
        return random_email();
    },

    "file_name": function() {
        return random_file_name();
    }
}

function random_array_data(arr) {
    if (!arr) {
        throw "Empty array: " + arr;
    }

    return arr[random.integer(0, arr.length - 1)];
}

function get_date_str(val, format) {
    return val.toFormat(format);
}

function random_date_data(format, defval) {
    defval = defval || new Date();

    return get_date_str(defval, format);
}

function random_public_ip() {
    return random_array_data([
        "197.199.253.1",
        "197.199.254.8",
        "218.176.242.88",
        "206.190.36.45",
        "68.180.206.184"
    ]);
}

function random_user_agent() {
    return random_array_data([
        "BlackBerry9700/5.0.0.862 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/331 UNTRUSTED/1.0 3gpp-gba",
        "Mozilla/5.0 (Linux; U; Android 4.0.4; en-gb; GT-I9300 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
        "Mozilla/5.0(iPad; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B314 Safari/531.21.10",
        "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.1.0-80) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=true",
        "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; Touch)",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.131 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:29.0) Gecko/20100101 Firefox/29.0",
        "Windows NT 5.1; SV1) ; Maxthon; InfoPath.1; .NET CLR 3.5.30729; .NET CLR 3.0.30618)",
        "Mozilla/5.0 (Macintosh; U; PPC Mac OS X; nl-nl) AppleWebKit/416.12 (KHTML, like Gecko) Safari/416.13",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:2.0b11) Gecko/20110209 Firefox/ SeaMonkey/2.1b2",
        "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.0.9) Gecko/2009042410 Firefox/3.0.9 Wyzo/3.0.3",
        "Mozilla/5.0 (compatible; MSIE 10.6; Windows NT 6.1; Trident/5.0; InfoPath.2; SLCC1; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET CLR 2.0.50727) 3gpp-gba UNTRUSTED/1.0",
        "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)",
        "Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; GTB7.4; InfoPath.2; SV1; .NET CLR 3.3.69573; WOW64; en-US)",
        "Mozilla/5.0 (Windows; U; MSIE 7.0; Windows NT 6.0; en-US)",
        "unknown"
    ]);
}

function random_string() {
    return random_str();
}

function random_int(min, max) {
    return random.integer(min || 0, max || 65536);
}

function random_rsp_code() {
    return random_array_data([100, 200, 201, 202, 203, 304, 400, 500]);
}

function random_http_method() {
    return random_array_data(['GET', 'POST']);
}

function random_person_name() {
    return random_array_data(['Jackson', 'Aiden', "Liam", "Lucas", "Justin", "Eric", "David", "Emma", "Mary", "Susan", "Jacob", "Ryan", "Alexander", "James", 'Robert', 'William', 'Jack', 'Simon', 'Alex', 'Olivia', 'John', 'Daniel', 'Moshe', 'Julia']);
}

function random_email(user_name, domain) {
    user_name = user_name || random_person_name();
    domain = domain || random_array_data(["gmail.com", "yahoo.com", "126.com", "abc.com"]);

    return user_name.toLowerCase() + "@" + domain;
}

function random_file_name(file_name, suffix) {
    file_name = file_name || random_array_data(['cms_fs', 'overview', "linux", "jquery", "mootools", "angular", "emberjs", "jetty", "spring", "hibernate", "strtus", "iteye", "csdn", "netty", "mina"]);
    suffix = suffix || random_array_data(["doc", "pdf", "xls", "txt"]);

    return file_name.toLowerCase() + "." + suffix;
}

function random_data(type, format) {
    var method = type_2_value[type];

    if (!method) {
        throw "Can not get random data method with type: " + type;
    }

    return method(format);
}

exports.sig_2_app = sig_2_app;
exports.random_data = random_data;
exports.random_array_data = random_array_data;
exports.random_public_ip = random_public_ip;
exports.random_user_agent = random_user_agent;
exports.random_string = random_string;
exports.random_int = random_int;
exports.random_rsp_code = random_rsp_code;
exports.random_http_method = random_http_method;
exports.random_person_name = random_person_name;
exports.random_email = random_email;
exports.random_file_name = random_file_name;
