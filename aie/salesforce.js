module.exports = {
    "appname": "Salesforce",
    "hostname": "www.salesforce.com",
    "category": "crm",
    "activities": {
        "400001": {
            "name": "l2_salesforce_get_activity",
            "keys": {
                "method": {
                    "type": "",
                    "key": "method"
                },
                "hostname": {
                    "type": "",
                    "key": "hostname"
                },
                "user_id": {
                    "type": "",
                    "key": "user_id"
                },
                "rsp_code": {
                    "type": "rsp_code",
                    "key": "rsp_code"
                }
            }
        },
        "400002": {
            "name": "l2_salesforce_put_activity",
            "keys": {
                "method": {
                    "type": "",
                    "key": "method"
                },
                "hostname": {
                    "type": "",
                    "key": "hostname"
                },
                "user_id": {
                    "type": "",
                    "key": "user_id"
                },
                "rsp_code": {
                    "type": "rsp_code",
                    "key": "rsp_code"
                }
            }
        },
        "400003": {
            "name": "l2_salesforce_post_activity",
            "keys": {
                "method": {
                    "type": "",
                    "key": "method"
                },
                "hostname": {
                    "type": "",
                    "key": "hostname"
                },
                "user_id": {
                    "type": "",
                    "key": "user_id"
                },
                "rsp_code": {
                    "type": "rsp_code",
                    "key": "rsp_code"
                }
            }
        },
        "400004": {
            "name": "l2_salesforce_delete_activity",
            "keys": {
                "method": {
                    "type": "",
                    "key": "method"
                },
                "hostname": {
                    "type": "",
                    "key": "hostname"
                },
                "user_id": {
                    "type": "",
                    "key": "user_id"
                },
                "rsp_code": {
                    "type": "rsp_code",
                    "key": "rsp_code"
                }
            }
        },
        "400008": {
            "name": "user_login",
            "keys": {
                "user_agent": {
                    "type": "user_agent",
                    "key": "user_agent"
                },
                "login_name": {
                    "type": "",
                    "key": "login_name"
                },
                "rsp_code": {
                    "type": "rsp_code",
                    "key": "rsp_code"
                },
                "user_id": {
                    "type": "",
                    "key": "user_id"
                }
            }
        },
        "400009": {
            "name": "user_logout",
            "keys": {
                "user_id": {
                    "type": "",
                    "key": "user_id"
                }
            }
        }
    }
}
