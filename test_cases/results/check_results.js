var redis = require("redis");

var count = 0;
result = 0;

// var elasticsearch = require('elasticsearch');
// var es_client = new elasticsearch.Client({
//   host: 'localhost:9200'
// });

rets = []

var client = redis.createClient(6379, '127.0.0.1');
client.flushall(function() {
  client.quit();
});

function test() {

  var client = redis.createClient(6379, '127.0.0.1');

  // es_client.deleteByQuery({
  //   index: '*',
  //   q: "gw_id:fake"
  // }, function(error, response) {
  //   if (error) {
  //     console.log(error)
  //   }
  // })

  require('../unsub_2_sub')(); //
  // require('../aie_first_gw_second')(); //
  // require('../gw_first_aie_second')(); //

  setTimeout(function() {
    client.keys('ss_app_clean#user_id_2_device_id_list#*', function(err, keys) {
      if (err) return console.log(err);

      console.log('***************' + (count + 1) + '*****************')

      if (keys.length == 1) {
        result++
      }
      for (var i = 0, len = keys.length; i < len; i++) {
        console.log('#' + (i + 1) + ' ' + keys[i]);
      }

      client.flushall();

      client.quit(function() {
        if (++count < 1000) {
          test();
        } else {
          console.log('#########' + result + '#########')
        }
      });



    });

  }, 300);

}

test()
