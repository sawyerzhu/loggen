
var _ = require('underscore');

function get_user_token(datas) {
    return datas['login_name'];
}

module.exports = function(user_id_key, get_user_id_func) {
    user_id_key = user_id_key || 'user_id';
    get_user_id_func = get_user_id_func || get_user_token;

    var user_id_obj = {};
    user_id_obj[user_id_key] = {
        "type": "string",
        "default": function(format, datas, key) {
            return get_user_id_func(datas);
        }
    }

    return {
        "-100000": {
            "name": "login",
            "keys": _.extend(_.clone(user_id_obj), {

                "rsp_code": {
                    "type": "rsp_code"
                },

                "user_agent": {
                    "type": "user_agent"
                },

                "success": {
                    "type": "boolean",
                    "default": true
                }
            })
        },

        "-100001": {
            "name": "get",
            "keys": _.extend(_.clone(user_id_obj), {

                "rsp_code": {
                    "type": "rsp_code"
                },

                "user_agent": {
                    "type": "user_agent"
                },

                "method": {
                    "type": "string",
                    "default": "get"
                }
            })
        },

        "-100002": {
            "name": "put",
            "keys": _.extend(_.clone(user_id_obj), {

                "rsp_code": {
                    "type": "rsp_code"
                },

                "user_agent": {
                    "type": "user_agent"
                },

                "method": {
                    "type": "string",
                    "default": "put"
                }
            })
        },

        "-100003": {
            "name": "post",
            "keys": _.extend(_.clone(user_id_obj), {

                "rsp_code": {
                    "type": "rsp_code"
                },

                "user_agent": {
                    "type": "user_agent"
                },

                "method": {
                    "type": "string",
                    "default": "post"
                }
            })
        },

        "-100004": {
            "name": "delete",
            "keys": _.extend(_.clone(user_id_obj), {

                "rsp_code": {
                    "type": "rsp_code"
                },

                "user_agent": {
                    "type": "user_agent"
                },

                "method": {
                    "type": "string",
                    "default": "delete"
                }
            })
        }

    }
}
