
var random = require("random-js")();

var random_str = require('random-string');

var _ = require('underscore');

require('date-utils');

var app_id_2_app = {
    "1": require('./aie/box'),

    "2": require('./aie/dropbox'),

    "3": {
        "appname": "GoogleDrive",
        "hostname": "www.gdrive.com",
        "category": ["storage"],
        "activity_path": {
            "login": ['-100000'],
            "upload": ["-100000", "-100001"],
            "preview": ["-100000", "-100004"],
            "delete": ["-100000", "-100003"],
            "upload_preview_download": ["-100000", "-100004", "-100002"],
            "download": ["-100000", "-100004", "-100002"]
        },
        "activities": require('./aie/common_activity.js')('user_token')
    },

    "4": {
        "appname": "ShareFile",
        "hostname": "www.sharefile.com",
        "category": ["storage"],
        "activity_path": {
            "login": ['-100000'],
            "upload": ["-100000", "-100001"],
            "preview": ["-100000", "-100004"],
            "delete": ["-100000", "-100003"],
            "upload_preview_download": ["-100000", "-100004", "-100002"],
            "download": ["-100000", "-100004", "-100002"]
        },
        "activities": require('./aie/common_activity.js')('user_token')
    },

    "5": {
        "appname": "SugarSync",
        "hostname": "www.sugarsync.com",
        "category": ["storage"],
        "activity_path": {
            "login": ['-100000'],
            "upload": ["-100000", "-100001"],
            "preview": ["-100000", "-100004"],
            "delete": ["-100000", "-100003"],
            "upload_preview_download": ["-100000", "-100004", "-100002"],
            "download": ["-100000", "-100004", "-100002"]
        },
        "activities": require('./aie/common_activity.js')('user_token')
    },

    "6": {
        "appname": "DropSend",
        "hostname": "www.dropsend.com",
        "category": ["storage"],
        "activity_path": {
            "login": ['-100000'],
            "upload": ["-100000", "-100001"],
            "preview": ["-100000", "-100004"],
            "delete": ["-100000", "-100003"],
            "upload_preview_download": ["-100000", "-100004", "-100002"],
            "download": ["-100000", "-100004", "-100002"]
        },
        "activities": require('./aie/common_activity.js')('user_token')
    },

    "7": {
        "appname": "PhotoBucket",
        "hostname": "www.photobucket.com",
        "category": ["storage"],
        "activity_path": {
            "login": ['-100000'],
            "upload": ["-100000", "-100001"],
            "preview": ["-100000", "-100004"],
            "delete": ["-100000", "-100003"],
            "upload_preview_download": ["-100000", "-100004", "-100002"],
            "download": ["-100000", "-100004", "-100002"]
        },
        "activities": require('./aie/common_activity.js')('user_token')
    },

    "8": {
        "appname": "SkyPath",
        "hostname": "www.skypath.com",
        "category": ["storage"],
        "activity_path": {
            "login": ['-100000'],
            "upload": ["-100000", "-100001"],
            "preview": ["-100000", "-100004"],
            "delete": ["-100000", "-100003"],
            "upload_preview_download": ["-100000", "-100004", "-100002"],
            "download": ["-100000", "-100004", "-100002"]
        },
        "activities": require('./aie/common_activity.js')('user_token')
    },

    "9": {
        "appname": "Mozy",
        "hostname": "www.mozy.com",
        "category": ["storage"],
        "activity_path": {
            "login": ['-100000'],
            "upload": ["-100000", "-100001"],
            "preview": ["-100000", "-100004"],
            "delete": ["-100000", "-100003"],
            "upload_preview_download": ["-100000", "-100004", "-100002"],
            "download": ["-100000", "-100004", "-100002"]
        },
        "activities": require('./aie/common_activity.js')('user_token')
    },

    "10": {
        "appname": "SyncPlicity",
        "hostname": "www.syncplicity.com",
        "category": ["storage"],
        "activity_path": {
            "login": ['-100000'],
            "upload": ["-100000", "-100001"],
            "preview": ["-100000", "-100004"],
            "delete": ["-100000", "-100003"],
            "upload_preview_download": ["-100000", "-100004", "-100002"],
            "download": ["-100000", "-100004", "-100002"]
        },
        "activities": require('./aie/common_activity.js')('user_token')
    },

    "11": {
        "appname": "Hightail",
        "hostname": "www.hightail.com",
        "category": ["storage"],
        "activity_path": {
            "login": ['-100000'],
            "upload": ["-100000", "-100001"],
            "preview": ["-100000", "-100004"],
            "delete": ["-100000", "-100003"],
            "upload_preview_download": ["-100000", "-100004", "-100002"],
            "download": ["-100000", "-100004", "-100002"]
        },
        "activities": require('./aie/common_activity.js')('user_token')
    },

    "12": {
        "appname": "icloud",
        "hostname": "www.icloud.com",
        "category": ["storage"],
        "activity_path": {
            "login": ['-100000'],
            "upload": ["-100000", "-100001"],
            "preview": ["-100000", "-100004"],
            "delete": ["-100000", "-100003"],
            "upload_preview_download": ["-100000", "-100004", "-100002"],
            "download": ["-100000", "-100004", "-100002"]
        },
        "activities": require('./aie/common_activity.js')('user_token')
    },

    "13": {
        "appname": "MicrosoftSkyDrive",
        "hostname": "www.msskydrive.com",
        "category": ["storage"],
        "activity_path": {
            "login": ['-100000'],
            "upload": ["-100000", "-100001"],
            "preview": ["-100000", "-100004"],
            "delete": ["-100000", "-100003"],
            "upload_preview_download": ["-100000", "-100004", "-100002"],
            "download": ["-100000", "-100004", "-100002"]
        },
        "activities": require('./aie/common_activity.js')('user_token')
    },

    "14": {
        "appname": "HighTail",
        "hostname": "www.hightail.com",
        "category": ["storage"],
        "activity_path": {
            "login": ['-100000'],
            "upload": ["-100000", "-100001"],
            "preview": ["-100000", "-100004"],
            "delete": ["-100000", "-100003"],
            "upload_preview_download": ["-100000", "-100004", "-100002"],
            "download": ["-100000", "-100004", "-100002"]
        },
        "activities": require('./aie/common_activity.js')('user_token')
    },

    "15": {
        "appname": "Wuala",
        "hostname": "www.wuala.com",
        "category": ["storage"],
        "activity_path": {
            "login": ['-100000'],
            "upload": ["-100000", "-100001"],
            "preview": ["-100000", "-100004"],
            "delete": ["-100000", "-100003"],
            "upload_preview_download": ["-100000", "-100004", "-100002"],
            "download": ["-100000", "-100004", "-100002"]
        },
        "activities": require('./aie/common_activity.js')('user_token')
    },

    "16": {
        "appname": "Egnyte",
        "hostname": "www.ngnyte.com",
        "category": ["storage"],
        "activity_path": {
            "login": ['-100000'],
            "upload": ["-100000", "-100001"],
            "preview": ["-100000", "-100004"],
            "delete": ["-100000", "-100003"],
            "upload_preview_download": ["-100000", "-100004", "-100002"],
            "download": ["-100000", "-100004", "-100002"]
        },
        "activities": require('./aie/common_activity.js')('user_token')
    },

    "17": {
        "appname": "WeTransfer",
        "hostname": "www.wetransfer.com",
        "category": ["storage"],
        "activity_path": {
            "login": ['-100000'],
            "upload": ["-100000", "-100001"],
            "preview": ["-100000", "-100004"],
            "delete": ["-100000", "-100003"],
            "upload_preview_download": ["-100000", "-100004", "-100002"],
            "download": ["-100000", "-100004", "-100002"]
        },
        "activities": require('./aie/common_activity.js')('user_token')
    },

    "18": {
        "appname": "Accelion",
        "hostname": "www.accelion.com",
        "category": ["storage"],
        "activity_path": {
            "login": ['-100000'],
            "upload": ["-100000", "-100001"],
            "preview": ["-100000", "-100004"],
            "delete": ["-100000", "-100003"],
            "upload_preview_download": ["-100000", "-100004", "-100002"],
            "download": ["-100000", "-100004", "-100002"]
        },
        "activities": require('./aie/common_activity.js')('user_token')
    },

    "19": {
        "appname": "LiveDrive",
        "hostname": "www.livedrive.com",
        "category": ["storage"],
        "activity_path": {
            "login": ['-100000'],
            "upload": ["-100000", "-100001"],
            "preview": ["-100000", "-100004"],
            "delete": ["-100000", "-100003"],
            "upload_preview_download": ["-100000", "-100004", "-100002"],
            "download": ["-100000", "-100004", "-100002"]
        },
        "activities": require('./aie/common_activity.js')('user_token')
    },

    "20": {
        "appname": "JungleDisk",
        "hostname": "www.jungledisk.com",
        "category": ["storage"],
        "activity_path": {
            "login": ['-100000'],
            "upload": ["-100000", "-100001"],
            "preview": ["-100000", "-100004"],
            "delete": ["-100000", "-100003"],
            "upload_preview_download": ["-100000", "-100004", "-100002"],
            "download": ["-100000", "-100004", "-100002"]
        },
        "activities": require('./aie/common_activity.js')('user_token')
    },

    "21": {
        "appname": "OneDrive",
        "hostname": "www.onedrive.com",
        "category": ["storage"],
        "activity_path": {
            "login": ['-100000'],
            "upload": ["-100000", "-100001"],
            "preview": ["-100000", "-100004"],
            "delete": ["-100000", "-100003"],
            "upload_preview_download": ["-100000", "-100004", "-100002"],
            "download": ["-100000", "-100004", "-100002"]
        },
        "activities": require('./aie/common_activity.js')('user_token')
    },

    '22': {
        "appname": 'Squareup',
        "hostname": 'www.squareup.com',
        "category": ["sales"],
        "activity_path": {
            "login": ["-100000"],
            "get": ["-100000", "-100001"],
            "put": ["-100000", "-100002"],
            "post": ["-100000", "-100003"],
            "delete": ["-100000", "-100004"]
        },
        "activities": require('./aie/l2_common_activity.js')('user_token')
    },

    '23': {
        "appname": 'Expensify',
        "hostname": 'www.expensify.com',
        "category": ["finace"],
        "activity_path": {
            "login": ["-100000"],
            "get": ["-100000", "-100001"],
            "put": ["-100000", "-100002"],
            "post": ["-100000", "-100003"],
            "delete": ["-100000", "-100004"]
        },
        "activities": require('./aie/l2_common_activity.js')('user_token')
    },

    '24': {
        "appname": 'Constcontacts',
        "hostname": 'www.constcontacts.com',
        "category": ["sales"],
        "activity_path": {
            "login": ["-100000"],
            "get": ["-100000", "-100001"],
            "put": ["-100000", "-100002"],
            "post": ["-100000", "-100003"],
            "delete": ["-100000", "-100004"]
        },
        "activities": require('./aie/l2_common_activity.js')('user_token')
    },

    '25': {
        "appname": 'Concursolutions',
        "hostname": 'www.concursolutions.com',
        "category": ["finace"],
        "activity_path": {
            "login": ["-100000"],
            "get": ["-100000", "-100001"],
            "put": ["-100000", "-100002"],
            "post": ["-100000", "-100003"],
            "delete": ["-100000", "-100004"]
        },
        "activities": require('./aie/l2_common_activity.js')('user_token')
    },

    '26': {
        "appname": 's3',
        "hostname": 'www.s3.com',
        "category": ["storage"],
        "activity_path": {
            "login": ['-100000'],
            "upload": ["-100000", "-100001"],
            "preview": ["-100000", "-100004"],
            "delete": ["-100000", "-100003"],
            "upload_preview_download": ["-100000", "-100004", "-100002"],
            "download": ["-100000", "-100004", "-100002"]
        },
        "activities": require('./aie/common_activity.js')('user_token')
    },

    '27': {
        "appname": 'AWS Glacier',
        "hostname": 'www.glacier.com',
        "category": ["finace"],
        "activity_path": {
            "login": ['-100000'],
            "upload": ["-100000", "-100001"],
            "preview": ["-100000", "-100004"],
            "delete": ["-100000", "-100003"],
            "upload_preview_download": ["-100000", "-100004", "-100002"],
            "download": ["-100000", "-100004", "-100002"]
        },
        "activities": require('./aie/common_activity.js')('user_token')
    },

    // add more for GW

    "10001": {
        "appname": "gmail",
        "hostname": "www.gmail.com",
        "category": ["mail"],
        "activity_path": {
            "login": ["-100000"]
        },
        "activities": require('./aie/l2_common_activity.js')('user_token')
    },

    "10002": {
        "appname": "hotmail",
        "hostname": "www.hotmail.com",
        "category": ["mail"],
        "activity_path": {
            "login": ["-100000"]
        },
        "activities": require('./aie/l2_common_activity.js')('user_token')
    },

    '10004': {
        "appname": "yahoo-mail",
        "hostname": "www.yahoo-mail.com",
        "category": ["mail"],
        "activity_path": {
            "login": ["-100000"]
        },
        "activities": require('./aie/l2_common_activity.js')('user_token')
    },

    '20001': {
        "appname": "skype",
        "hostname": "www.skype.com",
        "category": ["im"],
        "activity_path": {
            "login": ["-100000"]
        },
        "activities": require('./aie/l2_common_activity.js')('user_token')
    },

    '20002': {
        "appname": "gtalk",
        "hostname": "www.gtalk.com",
        "category": ["im"],
        "activity_path": {
            "login": ["-100000"]
        },
        "activities": require('./aie/l2_common_activity.js')('user_token')
    },

    '30001': {
        "appname": "facebook",
        "hostname": "www.facebook.com",
        "category": ["social"],
        "activity_path": {
            "login": ["-100000"]
        },
        "activities": require('./aie/l2_common_activity.js')('user_token')
    },

    '30002': {
        "appname": "twitter",
        "hostname": "www.twitter.com",
        "category": ["social"],
        "activity_path": {
            "login": ["-100000"]
        },
        "activities": require('./aie/l2_common_activity.js')('user_token')
    },

    '30003': {
        "appname": "youtube",
        "hostname": "www.youtube.com",
        "category": ["social"],
        "activity_path": {
            "login": ["-100000"]
        },
        "activities": require('./aie/l2_common_activity.js')('user_token')
    }
}

var user_info = {
    "jackson@gmail.com": {
        "unsub_emails": ['jackson@yahoo.com',  'jackson@hotmail.com'],
        "devices": [{
                "mac": 'ja:ck:so:n0:00:00'
            },

            {
                "mac": 'ja:ck:so:n1:00:00'
            },

            {
                "mac": 'ja:ck:so:n2:00:00'
            }
        ]
    },

    "aiden@gmail.com": {
        "unsub_emails": ['aiden@yahoo.com', 'aiden@abc.com'],
        "devices": [{
                "mac": 'ai:de:n0:00:00:00'
            },

            {
                "mac": 'ai:de:n1:00:00:00'
            }
        ]
    },

    "liam@gmail.com": {
        "unsub_emails": ['liam@yahoo.com', 'liam@sina.com'],
        "devices": [{
                "mac": 'li:am:00:00:00:00'
            },

            {
                "mac": 'li:am:01:00:00:00'
            }
        ]
    },

    "lucas@gmail.com": {
        "unsub_emails": ['lucas@hotmail.com', 'lucas@abc.com'],
        "devices": [{
                "mac": 'lu:ca:s0:00:00:00'
            },

            {
                "mac": 'lu:ca:s1:00:00:00'
            }
        ]
    },

    "justin@gmail.com": {
        "unsub_emails": ['justin@yahoo.com', 'justin@abc.com'],
        "devices": [{
                "mac": 'ju:st:in:00:00:00'
            },

            {
                "mac": 'ju:st:in:01:00:00'
            }
        ]
    },

    "eric@gmail.com": {
        "unsub_emails": ['eric@hotmail.com', 'eric@abc.com'],
        "devices": [{
                "mac": 'er:ic:00:00:00:00'
            },

            {
                "mac": 'er:ic:01:00:00:00'
            }
        ]
    },

    "david@gmail.com": {
        "unsub_emails": ['david@yahoo.com', 'david@uvw.com'],
        "devices": [{
                "mac": 'da:vi:d0:00:00:00'
            },

            {
                "mac": 'da:vi:d1:01:00:00'
            }
        ]
    },

    "emma@gmail.com": {
        "unsub_emails": ['emma@yahoo.com', 'emma@xyz.com'],
        "devices": [{
                "mac": 'em:ma:00:00:00:00'
            },

            {
                "mac": 'em:ma:01:00:00:00'
            }
        ]
    },

    "mary@gmail.com": {
        "unsub_emails": ['mary@yahoo.com', 'mary@mnt.com'],
        "devices": [{
                "mac": 'ma:ry:00:00:00:00'
            },

            {
                "mac": 'ma:ry:01:00:00:00'
            }
        ]
    },

    "susan@gmail.com": {
        "unsub_emails": ['susan@yahoo.com', 'susan@rst.com'],
        "devices": [{
                "mac": 'su:sa:n0:00:00:00'
            },

            {
                "mac": 'su:sa:n1:00:00:00'
            }
        ]
    },

    "jacob@gmail.com": {
        "unsub_emails": ['jacob@yahoo.com', 'jacob@efg.com'],
        "devices": [{
                "mac": 'ja:co:b0:00:00:00'
            },

            {
                "mac": 'ja:co:b1:00:00:00'
            }
        ]
    },

    "ryan@gmail.com": {
        "unsub_emails": ['ryan@yahoo.com', 'ryan@hij.com'],
        "devices": [{
                "mac": 'ry:an:00:00:00:00'
            },

            {
                "mac": 'ry:an:01:00:00:00'
            }
        ]
    },

    "alexander@gmail.com": {
        "unsub_emails": ['alexander@yahoo.com', 'alexander@ij.com'],
        "devices": [{
                "mac": 'al:ex:an:de:r0:00'
            },

            {
                "mac": 'al:ex:an:de:r1:00'
            }
        ]
    },

    "james@gmail.com": {
        "unsub_emails": ['james@yahoo.com', 'james@mn.com'],
        "devices": [{
                "mac": 'ja:me:s0:00:00:00'
            },

            {
                "mac": 'ja:me:s1:00:00:00'
            }
        ]
    },

    "robert@gmail.com": {
        "unsub_emails": ['robert@yahoo.com', 'robert@ppt.com'],
        "devices": [{
                "mac": 'ro:be:rt:00:00:00'
            },

            {
                "mac": 'ro:be:rt:01:00:00'
            }
        ]
    },

    "william@gmail.com": {
        "unsub_emails": ['william@yahoo.com', 'william@doc.com'],
        "devices": [{
                "mac": 'wi:ll:ia:m0:00:00'
            },

            {
                "mac": 'wi:ll:ia:m1:00:00'
            }
        ]
    },

    "jack@gmail.com": {
        "unsub_emails": ['jack@abc.com', 'jack@xls.com'],
        "devices": [{
                "mac": 'ja:ck:00:00:00:00'
            },

            {
                "mac": 'ja:ck:01:00:00:00'
            }
        ]
    },

    "simon@gmail.com": {
        "unsub_emails": ['simon@yahoo.com', 'simon@pdf.com'],
        "devices": [{
                "mac": 'si:mo:n0:00:00:00'
            },

            {
                "mac": 'si:mo:n1:00:00:00'
            }
        ]
    },

    "alex@gmail.com": {
        "unsub_emails": ['alex@yahoo.com', 'alex@abc.com'],
        "devices": [{
                "mac": 'al:ex:00:00:00:00'
            },

            {
                "mac": 'al:ex:01:00:00:00'
            }
        ]
    },

    "olivia@gmail.com": {
        "unsub_emails": ['olivia@yahoo.com', 'olivia@rst.com'],
        "devices": [{
                "mac": 'ol:iv:ia:00:00:00'
            },

            {
                "mac": 'ol:iv:ia:01:00:00'
            }
        ]
    },

    "john@gmail.com": {
        "unsub_emails": ['john@yahoo.com', 'john@req.com'],
        "devices": [{
                "mac": 'jo:hn:00:00:00:00'
            },

            {
                "mac": 'jo:hn:01:00:00:00'
            }
        ]
    },

    "daniel@gmail.com": {
        "unsub_emails": ['daniel@yahoo.com', 'daniel@rsp.com', "daniel@inbox.com"],
        "devices": [{
                "mac": 'da:ni:el:00:00:00'
            },

            {
                "mac": 'da:ni:el:01:00:00'
            }
        ]
    },

    "moshe@gmail.com": {
        "unsub_emails": ['moshe@yahoo.com', 'moshe@abc.com'],
        "devices": [{
                "mac": 'mo:sh:e0:00:00:00'
            },

            {
                "mac": 'mo:sh:e1:01:00:00'
            }
        ]
    },

    "julia@gmail.com": {
        "unsub_emails": ['julia@yahoo.com', 'julia@abc.com', "julia@yeah.net"],
        "devices": [{
                "mac": 'ju:li:a0:00:00:00'
            },

            {
                "mac": 'ju:li:a1:00:00:00'
            },

            {
                "mac": 'ju:li:a2:00:00:00'
            }
        ]
    }

}

var type_2_value = {
    "boolean": function() {
        return random_boolean();
    },

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

        var keys = [];


        for (key in app_id_2_app) {
            keys.push(key);
        }

        return app_id_2_app[random_array_data(keys)]['hostname']
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
    },

    "mac": function() {
        return random_mac();
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
        "205.251.245.123",
        "221.176.24.154",
        "54.84.19.197",
        "63.218.211.37",
        "54.84.177.105",
        "74.125.239.115"
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
    domain = domain || random_array_data(["abc.com", "yahoo.com"]);

    return user_name.toLowerCase() + "@" + domain;
}

function random_mac() {
    return random_array_data(['5c:f9:38:8d:b7:64', "22:00:0a:41:86:a0"]);
}

function random_file_name(file_name) {
    file_name = file_name || random_array_data(['cms_fs.doc', 'overview.doc', "linux.pdf", "jquery.txt", "mootools.xls", "angular.pdf", "emberjs.doc", "jetty.pdf", "spring.doc", "hibernate.pdf", "stratus.xmls", "iteye.txt", "csdn.txt", "netty.txt", "mina.doc"]);

    return file_name;
}

function random_boolean() {
    return random_array_data([true, false]);
}

function random_app(id) {
    var keys = get_all_app_ids();

    if (id) {
        if (_.isArray(id)) {
            keys = id;
        } else {
            keys = [id];
        }
    }

    return app_id_2_app[random_array_data(keys)];
}

function get_all_app_ids() {
    var keys = [];


    for (key in app_id_2_app) {

        // just for have signature definition apps
        if(parseInt(key) < 10000) {
            keys.push(key);
        }
    }

    return keys;
}

function random_app_activity_path(app, activity_path_key) {
    if (!app || !app.activity_path) {
        throw "The app(" + app.hostname + ") does not has activity path";
    }

    var keys = [];


    for (key in app.activity_path) {
        keys.push(key)
    }


    if (activity_path_key) {
        if (_.isArray(activity_path_key)) {
            keys = activity_path_key;
        } else {
            keys = [activity_path_key];
        }
    }

    return app.activity_path[random_array_data(keys)];
}

function random_user_info(id) {
    var keys = get_all_user_info_keys();

    if (id) {
        if (_.isArray(id)) {
            keys = id;
        } else {
            keys = [id];
        }
    }

    var key = random_array_data(keys);

    var user = user_info[key];

    user.sub_email = key;

    return user;
}

function get_all_user_info_keys() {
    var keys = [];


    for (key in user_info) {
        keys.push(key);
    }

    return keys;
}

function random_data(type, format) {
    var method = type_2_value[type];

    if (!method) {
        throw "Can not get random data method with type: " + type + " With format: " + JSON.stringify(format);
    }

    return method(format);
}

exports.app_id_2_app = app_id_2_app;
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
exports.random_mac = random_mac;
exports.random_app = random_app;
exports.get_all_app_ids = get_all_app_ids;
exports.random_app_activity_path = random_app_activity_path;
exports.random_user_info = random_user_info;
exports.get_all_user_info_keys = get_all_user_info_keys;
