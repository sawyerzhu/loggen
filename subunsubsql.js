var random_data = require('./random_data');

var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database: 'CMS_development'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

var sub_mails = random_data.get_all_user_info_keys();


for (var i = 0; i < sub_mails.length; i++) {
    var user  = random_data.random_user_info(sub_mails[i]);

    for (var j = 0; j < user.unsub_emails.length; j++) {
        var unsub_email = user.unsub_emails[j];

        var log = "insert into unsub_sub_maps values (null, '" + unsub_email  + "', '" + user.sub_email + "', '2014-07-23 12:00:00', '2014-07-23 12:00:00');";

        connection.query(log);
    }

    for (var m = 0; m < user.devices.length; m++) {
        var device = user.devices[m];

        var log = "insert into mac_accounts values (null, '" + device.mac  + "', '" + user.sub_email + "', 1, '2014-07-23 12:00:00', '2014-07-23 12:00:00');";

        connection.query(log);

        for (var j = 0; j < user.unsub_emails.length; j++) {
            var unsub_email = user.unsub_emails[j];

            var log = "insert into mac_accounts values (null, '" + device.mac  + "', '" + unsub_email + "', 1, '2014-07-23 12:00:00', '2014-07-23 12:00:00');";

            connection.query(log);
        }
    }
}

connection.end();
