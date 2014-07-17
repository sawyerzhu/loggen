
function get_user_token(datas) {
    return datas['login_name'];
}

module.exports = function(user_id_key, get_user_id_func) {
    user_id_key = user_id_key || 'user_id';
    get_user_id_func = get_user_id_func || get_user_token;

    return {
        "100000": {
            "name": "login",
            "keys": {

                user_id_key: {
                    "type": "string",
                    "default": function(format, datas, key) {
                        return get_user_id_func(datas);
                    }
                },

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
            }
        },

        "100001": {
            "name": "upload",
            "keys": {

                user_id_key: {
                    "type": "string",
                    "default": function(format, datas, key) {
                        return get_user_id_func(datas);
                    }
                },

                "rsp_code": {
                    "type": "rsp_code"
                },

                "user_agent": {
                    "type": "user_agent"
                },

                "file_name": {
                    "type": "file_name"
                },

                "file_type": {
                    "type": "string",
                    "default": "file"
                },

                "file_size": {
                    "type": "int"
                }
            }
        },

        "100002": {
            "name": "download",
            "keys": {

                user_id_key: {
                    "type": "string",
                    "default": function(format, datas, key) {
                        return get_user_id_func(datas);
                    }
                },

                "rsp_code": {
                    "type": "rsp_code"
                },

                "user_agent": {
                    "type": "user_agent"
                },

                "file_name": {
                    "type": "file_name"
                },

                "file_type": {
                    "type": "string",
                    "default": "file"
                },

                "file_size": {
                    "type": "int"
                }
            }
        },

        "100003": {
            "name": "delete",
            "keys": {

                user_id_key: {
                    "type": "string",
                    "default": function(format, datas, key) {
                        return get_user_id_func(datas);
                    }
                },

                "rsp_code": {
                    "type": "rsp_code"
                },

                "user_agent": {
                    "type": "user_agent"
                },

                "file_name": {
                    "type": "file_name"
                },

                "file_type": {
                    "type": "string",
                    "default": "file"
                },

                "file_size": {
                    "type": "int"
                }
            }
        },

        "100004": {
            "name": "preview",
            "keys": {

                user_id_key: {
                    "type": "string",
                    "default": function(format, datas, key) {
                        return get_user_id_func(datas);
                    }
                },

                "rsp_code": {
                    "type": "rsp_code"
                },

                "user_agent": {
                    "type": "user_agent"
                },

                "file_name": {
                    "type": "file_name"
                },

                "file_type": {
                    "type": "string",
                    "default": "file"
                },

                "file_size": {
                    "type": "int"
                }
            }
        }

    }
}
