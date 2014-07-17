function get_user_id(datas) {
    return datas['login_name'];
}

module.exports = {
    "appname": "Box",
    "hostname": "www.box.com",
    "category": "storage",
    "activity_path": {
        "upload": ['100000', '100201'],
        "download": ['100000', '100300']
    },
    "activities": {
        "100000": {
            "name": "user_login",
            "keys": {

                "user_id": {
                    "type": "string",
                    "key": "user_id",
                    "default": function(format, datas, key) {
                        return get_user_id(datas);
                    }
                },

                "rsp_code": {
                    "type": "rsp_code",
                    "key": "rsp_code"
                },

                "user_agent": {
                    "type": "user_agent",
                    "key": "user_agent"
                },

                "success": {
                    "key": "success",
                    "type": "boolean",
                    "default": true
                }
            }
        },

        "100001": {
            "name": "user_login",
            "keys": {
                "rsp_code": {
                    "type": "rsp_code",
                    "key": "rsp_code"
                },

                "user_agent": {
                    "type": "user_agent",
                    "key": "user_agent"
                },

                "success": {
                    "key": "success",
                    "type": "boolean",
                    "default": false
                }
            }
        },

        "100002": {
            "name": "user_logout",
            "keys": {
                "hostname": {
                    "type": "url",
                    "key": "hostname",
                    "default": "www.box.com"
                },

                "user_id": {
                    "type": "string",
                    "key": "user_id",
                    "default": function(format, datas, key) {
                        return get_user_id(datas);
                    }
                },

                "rsp_code": {
                    "type": "rsp_code",
                    "key": "rsp_code"
                }
            }
        },

        "100003": {
            "name": "user_login",
            "keys": {
                "user_agent": {
                    "type": "user_agent",
                    "key": "user_agent"
                },

                "rsp_code": {
                    "type": "rsp_code",
                    "key": "rsp_code"
                },

                "success": {
                    "key": "success",
                    "type": "boolean",
                    "default": false
                }
            }
        },

        "100004": {
            "name": "user_login",
            "keys": {
                "user_id": {
                    "type": "string",
                    "key": "user_id",
                    "default": function(format, datas, key) {
                        return get_user_id(datas);
                    }
                },

                "rsp_code": {
                    "type": "rsp_code",
                    "key": "rsp_code"
                },

                "user_agent": {
                    "type": "user_agent",
                    "key": "user_agent"
                }
            }
        },

        "100005": {
            "name": "oauth2_authorize",
            "keys": {
                "user_agent": {
                    "type": "user_agent",
                    "key": "user_agent"
                },
                "authorize_code": {
                    "type": "string",
                    "key": "authorize_code"
                },
                "rsp_code": {
                    "type": "rsp_code",
                    "key": "rsp_code"
                }
            }
        },

        "100006": {
            "name": "oauth2_token",
            "keys": {
                "authorize_code": {
                    "type": "string",
                    "key": "authorize_code"
                },
                "result": {
                    "type": "string",
                    "key": "result"
                },
                "rsp_code": {
                    "type": "rsp_code",
                    "key": "rsp_code"
                },

                "success": {
                    "key": "success",
                    "type": "boolean",
                    "default": true
                }
            }
        },
        "100007": {
            "name": "user_login",
            "keys": {
                "user_agent": {
                    "type": "user_agent",
                    "key": "user_agent"
                },
                "rsp_code": {
                    "type": "rsp_code",
                    "key": "rsp_code"
                },

                "success": {
                    "key": "success",
                    "type": "boolean",
                    "default": false
                }
            }
        },

        "100201": {
            "name": "upload_file",
            "keys": {
                "user_id": {
                    "type": "string",
                    "key": "user_id",
                    "default": function(format, datas, key) {
                        return get_user_id(datas);
                    }
                },
                "upload_session_id": {
                    "type": "string",
                    "key": "upload_session_id"
                },
                "folder_id": {
                    "type": "string",
                    "key": "folder_id"
                },
                "file_name": {
                    "type": "file_name",
                    "key": "file_name"
                },
                "file_size": {
                    "type": "int",
                    "key": "file_size"
                },
                "rsp_code": {
                    "type": "rsp_code",
                    "key": "rsp_code"
                }
            }
        },
        "100203": {
            "name": "user_upload",
            "keys": {
                "user_id": {
                    "type": "",
                    "key": "user_id",
                    "default": function(format, datas, key) {
                        return get_user_id(datas);
                    }
                },
                "file_info": {
                    "type": "",
                    "key": "file_info"
                },
                "rsp_code": {
                    "type": "rsp_code",
                    "key": "rsp_code"
                }
            }
        },
        "100205": {
            "name": "wap_upload",
            "keys": {
                "user_id": {
                    "type": "",
                    "key": "user_id",
                    "default": function(format, datas, key) {
                        return get_user_id(datas);
                    }
                },
                "upload_session_id": {
                    "type": "",
                    "key": "upload_session_id"
                }
            }
        },
        "100300": {
            "name": "download_file",
            "keys": {
                "user_id": {
                    "type": "",
                    "key": "user_id",
                    "default": function(format, datas, key) {
                        return get_user_id(datas);
                    }
                },
                "file_id": {
                    "type": "",
                    "key": "file_id"
                },
                "rsp_code": {
                    "type": "rsp_code",
                    "key": "rsp_code"
                }
            }
        },
        "100301": {
            "name": "download_files",
            "keys": {
                "user_id": {
                    "type": "",
                    "key": "user_id",
                    "default": function(format, datas, key) {
                        return get_user_id(datas);
                    }
                },
                "file_ids": {
                    "type": "",
                    "key": "file_ids"
                },
                "rsp_code": {
                    "type": "rsp_code",
                    "key": "rsp_code"
                }
            }
        },
        "100302": {
            "name": "download_folder",
            "keys": {
                "user_id": {
                    "type": "",
                    "key": "user_id",
                    "default": function(format, datas, key) {
                        return get_user_id(datas);
                    }
                },
                "folder_id": {
                    "type": "",
                    "key": "folder_id"
                },
                "rsp_code": {
                    "type": "rsp_code",
                    "key": "rsp_code"
                }
            }
        },
        "100303": {
            "name": "guest_download_file",
            "keys": {
                "user_agent": {
                    "type": "user_agent",
                    "key": "user_agent"
                },
                "file_id": {
                    "type": "",
                    "key": "file_id"
                },
                "rsp_code": {
                    "type": "rsp_code",
                    "key": "rsp_code"
                }
            }
        },
        "100304": {
            "name": "guest_download_folder",
            "keys": {
                "user_agent": {
                    "type": "user_agent",
                    "key": "user_agent"
                },
                "folder_id": {
                    "type": "",
                    "key": "folder_id"
                },
                "rsp_code": {
                    "type": "rsp_code",
                    "key": "rsp_code"
                }
            }
        },
        "100305": {
            "name": "guest_download_files",
            "keys": {
                "user_agent": {
                    "type": "user_agent",
                    "key": "user_agent"
                },
                "file_ids": {
                    "type": "",
                    "key": "file_ids"
                },
                "rsp_code": {
                    "type": "rsp_code",
                    "key": "rsp_code"
                }
            }
        },
        "100306": {
            "name": "user_download",
            "keys": {
                "file_id": {
                    "type": "",
                    "key": "file_id"
                },
                "user_id": {
                    "type": "",
                    "key": "user_id",
                    "default": function(format, datas, key) {
                        return get_user_id(datas);
                    }
                },
                "rsp_code": {
                    "type": "rsp_code",
                    "key": "rsp_code"
                }
            }
        },
        "100307": {
            "name": "wap_download",
            "keys": {
                "user_id": {
                    "type": "",
                    "key": "user_id",
                    "default": function(format, datas, key) {
                        return get_user_id(datas);
                    }
                },
                "file_id": {
                    "type": "",
                    "key": "file_id"
                },
                "rsp_code": {
                    "type": "rsp_code",
                    "key": "rsp_code"
                }
            }
        },
        "100400": {
            "name": "guest_preview",
            "keys": {
                "user_agent": {
                    "type": "user_agent",
                    "key": "user_agent"
                },
                "file_id": {
                    "type": "",
                    "key": "file_id"
                },
                "file_info": {
                    "type": "",
                    "key": "file_info"
                },
                "rsp_code": {
                    "type": "rsp_code",
                    "key": "rsp_code"
                }
            }
        },
        "100401": {
            "name": "user_preview",
            "keys": {
                "user_id": {
                    "type": "",
                    "key": "user_id",
                    "default": function(format, datas, key) {
                        return get_user_id(datas);
                    }
                },
                "file_id": {
                    "type": "",
                    "key": "file_id"
                },
                "rsp_code": {
                    "type": "rsp_code",
                    "key": "rsp_code"
                }
            }
        },
        "100402": {
            "name": "mobile_preview",
            "keys": {
                "file_id": {
                    "type": "",
                    "key": "file_id"
                },
                "user_id": {
                    "type": "",
                    "key": "user_id",
                    "default": function(format, datas, key) {
                        return get_user_id(datas);
                    }
                },
                "rsp_code": {
                    "type": "rsp_code",
                    "key": "rsp_code"
                }
            }
        },
        "100501": {
            "name": "unshare_item",
            "keys": {
                "user_id": {
                    "type": "",
                    "key": "user_id",
                    "default": function(format, datas, key) {
                        return get_user_id(datas);
                    }
                },
                "item_ids": {
                    "type": "",
                    "key": "item_ids"
                },
                "rsp_code": {
                    "type": "rsp_code",
                    "key": "rsp_code"
                }
            }
        },
        "100502": {
            "name": "invite_share",
            "keys": {
                "user_id": {
                    "type": "",
                    "key": "user_id",
                    "default": function(format, datas, key) {
                        return get_user_id(datas);
                    }
                },
                "item_ids": {
                    "type": "",
                    "key": "item_ids"
                },
                "invitee_emails": {
                    "type": "",
                    "key": "invitee_emails"
                },
                "rsp_code": {
                    "type": "rsp_code",
                    "key": "rsp_code"
                }
            }
        },
        "100503": {
            "name": "collaborate_invite",
            "keys": {
                "user_id": {
                    "type": "",
                    "key": "user_id",
                    "default": function(format, datas, key) {
                        return get_user_id(datas);
                    }
                },
                "folder_id": {
                    "type": "",
                    "key": "folder_id"
                },
                "invitee_emails": {
                    "type": "",
                    "key": "invitee_emails"
                },
                "rsp_code": {
                    "type": "rsp_code",
                    "key": "rsp_code"
                }
            }
        },
        "100504": {
            "name": "get_collab",
            "keys": {
                "user_id": {
                    "type": "",
                    "key": "user_id",
                    "default": function(format, datas, key) {
                        return get_user_id(datas);
                    }
                },
                "folder_id": {
                    "type": "",
                    "key": "folder_id"
                },
                "collab_info": {
                    "type": "",
                    "key": "collab_info"
                }
            }
        },
        "100505": {
            "name": "remove_collab",
            "keys": {
                "user_id": {
                    "type": "",
                    "key": "user_id",
                    "default": function(format, datas, key) {
                        return get_user_id(datas);
                    }
                },
                "collab_id": {
                    "type": "",
                    "key": "collab_id"
                },
                "result": {
                    "type": "",
                    "key": "result"
                },
                "rsp_code": {
                    "type": "rsp_code",
                    "key": "rsp_code"
                }
            }
        },
        "100506": {
            "name": "wap_share",
            "keys": {
                "user_id": {
                    "type": "",
                    "key": "user_id",
                    "default": function(format, datas, key) {
                        return get_user_id(datas);
                    }
                },
                "invitee_emails": {
                    "type": "",
                    "key": "invitee_emails"
                },
                "item_id": {
                    "type": "",
                    "key": "item_id"
                },
                "rsp_code": {
                    "type": "rsp_code",
                    "key": "rsp_code"
                }
            }
        },
        "100600": {
            "name": "move_copy",
            "keys": {
                "user_id": {
                    "type": "",
                    "key": "user_id",
                    "default": function(format, datas, key) {
                        return get_user_id(datas);
                    }
                },
                "item_ids": {
                    "type": "",
                    "key": "item_ids"
                },
                "folder_id": {
                    "type": "",
                    "key": "folder_id"
                },
                "rsp_code": {
                    "type": "rsp_code",
                    "key": "rsp_code"
                }
            }
        },
        "100601": {
            "name": "delete_items",
            "keys": {
                "user_id": {
                    "type": "",
                    "key": "user_id",
                    "default": function(format, datas, key) {
                        return get_user_id(datas);
                    }
                },
                "item_ids": {
                    "type": "",
                    "key": "item_ids"
                },
                "items_info": {
                    "type": "",
                    "key": "items_info"
                },
                "rsp_code": {
                    "type": "rsp_code",
                    "key": "rsp_code"
                }
            }
        },
        "100602": {
            "name": "user_delete",
            "keys": {
                "user_id": {
                    "type": "",
                    "key": "user_id",
                    "default": function(format, datas, key) {
                        return get_user_id(datas);
                    }
                },
                "item_id": {
                    "type": "",
                    "key": "item_id"
                },
                "rsp_code": {
                    "type": "rsp_code",
                    "key": "rsp_code"
                }
            }
        },
        "100603": {
            "name": "mobile_move",
            "keys": {
                "user_id": {
                    "type": "",
                    "key": "user_id",
                    "default": function(format, datas, key) {
                        return get_user_id(datas);
                    }
                },
                "result": {
                    "type": "",
                    "key": "result"
                },
                "rsp_code": {
                    "type": "rsp_code",
                    "key": "rsp_code"
                }
            }
        },
        "100604": {
            "name": "mobile_copy",
            "keys": {
                "user_id": {
                    "type": "",
                    "key": "user_id",
                    "default": function(format, datas, key) {
                        return get_user_id(datas);
                    }
                },
                "result": {
                    "type": "",
                    "key": "result"
                },
                "rsp_code": {
                    "type": "rsp_code",
                    "key": "rsp_code"
                }
            }
        },
        "100700": {
            "name": "create_bookmark",
            "keys": {
                "user_id": {
                    "type": "",
                    "key": "user_id",
                    "default": function(format, datas, key) {
                        return get_user_id(datas);
                    }
                },
                "url": {
                    "type": "",
                    "key": "url"
                },
                "file_name": {
                    "type": "",
                    "key": "file_name"
                },
                "folder_id": {
                    "type": "",
                    "key": "folder_id"
                },
                "result": {
                    "type": "",
                    "key": "result"
                },
                "rsp_code": {
                    "type": "rsp_code",
                    "key": "rsp_code"
                }
            }
        },
        "100701": {
            "name": "create_boxnote",
            "keys": {
                "user_id": {
                    "type": "",
                    "key": "user_id",
                    "default": function(format, datas, key) {
                        return get_user_id(datas);
                    }
                },
                "folder_id": {
                    "type": "",
                    "key": "folder_id"
                },
                "file_name": {
                    "type": "",
                    "key": "file_name"
                },
                "result": {
                    "type": "",
                    "key": "result"
                },
                "rsp_code": {
                    "type": "rsp_code",
                    "key": "rsp_code"
                }
            }
        },
        "100900": {
            "name": "service_error",
            "keys": {
                "user_id": {
                    "type": "",
                    "key": "user_id",
                    "default": function(format, datas, key) {
                        return get_user_id(datas);
                    }
                },
                "result": {
                    "type": "",
                    "key": "result"
                },
                "rsp_code": {
                    "type": "rsp_code",
                    "key": "rsp_code"
                }
            }
        }

    }
}
