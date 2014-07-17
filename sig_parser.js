var fs = require('fs'),
    xml2js = require('xml2js');

var parser = new xml2js.Parser();
fs.readFile('/Users/sawyer/Downloads/StratuSee/log/logstash/signatures/box-sig.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
        var activities = {};

        for (var i = 0; i < result.aie_sigs.aie_sig.length; i++) {
            var sig = result.aie_sigs.aie_sig[i];

            keys = {};

            for (var j = 0; j < sig.and[0].element.length; j++) {
                var element = sig.and[0].element[j];


                if (element.capture) {
                    var type = '';

                    if(element.capture[0] == 'rsp_code') {
                        type = 'rsp_code'
                    } else if(element.capture[0] == 'user_agent') {
                        type = 'user_agent'
                    }

                    keys[element.capture[0]] = {
                        type: type,
                        key: element.capture[0]
                    }
                }
            }

            activities[sig['$'].sid] = {
                name: sig.activity[0],
                keys: keys
            }
        }

        console.log(JSON.stringify(activities))
    });
});
