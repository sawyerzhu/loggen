function get_user_id(datas) {
    return datas['login_name'];
}

module.exports = {
    "appname": "Box",
    "hostname": "www.box.com",
    "category": "storage",
    "activity_path": {
        "upload": ["100000", "100001"],
        "preview": ["100000", "100004"],
        "preview": ["100000", "100003"],
        "download": ["100000", "100004", "100002"]
    },
    "activities": require('./common_activity.js')('user_id')
}
