var random_data = require('./random_data');
var app_id_2_app = random_data.app_id_2_app;

var keys = [];
for (key in app_id_2_app) {
    keys.push(app_id_2_app[key].appname);
}

console.log(JSON.stringify(keys));
