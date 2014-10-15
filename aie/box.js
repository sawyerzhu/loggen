function get_user_id(datas) {
    return datas['login_name'];
}

module.exports = {
    "appname": "Box",
    "hostname": "www.box.com",
    "category": ["storage"],
    "activity_path": {
        "login": ["-100000"],
        "upload": ["-100000", "-100001"],
        "preview": ["-100000", "-100004"],
        "delete": ["-100000", "-100003"],
        "upload_preview_download": ["-100000", "-100001", "-100004", "-100002"],
        "download": ["-100000", "-100004", "-100002"]
    },
    "activities": require('./common_activity.js')('user_id')
}
