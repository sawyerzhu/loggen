var redis = require("ioredis");
var Promise = require("bluebird");

var client = redis.createClient(6379, 'dev-ds.stratusee.com'); // dev-ds.stratusee.com

var localClient = redis.createClient(6379, '127.0.0.1');

var getPromise = function(fn) {
  return new Promise(function(resolve, reject) {
    fn(resolve, reject)
  })
}

d_2_u = {}
d_2_l = {}

new_d_2_u = {}
new_d_2_l = {}
new_u_2_o = {}

getPromise(function(resolve, reject) {
  client.keys('ss_app_clean#device_id_2_user_id#*', function (err, keys) {
    if (err) {
      console.error(err);
    } else {
      resolve(keys);
    }
  });

})
.then(function(keys) {
  var promises = [];

  for (var i = 0, len = keys.length; i < len; i++) {
    key = keys[i];

    (function(key) {
      var arr = key.split('#');
      var device_id = arr[2];

      promises.push(getPromise(function(resolve, reject){
        client.get(key, function(error, val) {
          if (error) {
            console.error(error);
          } else {
            d_2_u[device_id] = JSON.parse(val);
            resolve(val);
          }

        });
      }));
    })(key)
  }

  return Promise.all(promises)

})
.then(function() {
  return getPromise(function(resolve, reject) {
    client.keys('ss_app_clean#device_id_2_unsub_list#*', function (err, keys) {
      if (err) {
        console.error(err);
      } else {
        resolve(keys);
      }
    });

  })
})
.then(function(keys) {
  var promises = [];

  for (var i = 0, len = keys.length; i < len; i++) {
    key = keys[i];

    (function(key) {
      var arr = key.split('#');
      var device_id = arr[2];

      promises.push(getPromise(function(resolve, reject){
        client.smembers(key, function(error, val) {
          if (error) {
            console.error(error);
          } else {
            d_2_l[device_id] = val;
            resolve(val);
          }

        });
      }));
    })(key)
  }

  return Promise.all(promises)
})
.then(function() {
  console.log('d_2_u = ' + JSON.stringify(d_2_u));
  console.log('d_2_l = ' + JSON.stringify(d_2_l));
  client.quit();
  console.log('***********************');


  for (d in d_2_l) {
    new_d_2_l[d] = [];

    for (var i = 0; i < d_2_l[d].length; i++) {
      new_d_2_l[d].push(d_2_l[d][i]);
    }

  }

  for (d in d_2_u) {
    user_id = d_2_u[d].offical_name;

    new_d_2_l[d] = new_d_2_l[d] || []
    new_d_2_l[d].push(user_id);

    new_u_2_o[user_id] = user_id;

    new_d_2_u[d] = {
      puser_id: user_id,
      changeable: true
    }

  }

  console.log(JSON.stringify(new_d_2_l));
  console.log(JSON.stringify(new_u_2_o));
  console.log(JSON.stringify(new_d_2_u));

  console.log('***********************');

  for (u in new_u_2_o) {
    localClient.set('ss_app_clean#user_id_2_offical_name#' + u, new_u_2_o[u])
  }

  for (d in new_d_2_l) {
    for (var i = 0; i < new_d_2_l[d].length; i++) {
      localClient.sadd('ss_app_clean#device_id_2_login_name_list#' + d, new_d_2_l[d][i]);
      localClient.sadd('ss_app_clean#login_name_2_device_id_list#' + new_d_2_l[d][i], d);
    }
  }

  for (d in new_d_2_u) {
    user_id = new_d_2_u[d]['puser_id']

    localClient.set('ss_app_clean#device_id_2_user_id#' + d, JSON.stringify(new_d_2_u[d]));
    localClient.sadd('ss_app_clean#user_id_2_device_id_list#' + user_id, d);
  }

  localClient.quit();
})
