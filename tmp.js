

var udp = require('./transport/udp');

var host = '10.208.2.10';
var udp_client = new udp.udp_client(host, 514);

for (var i = 0; i < 7000; i++) {
    udp_client.send('Aug 26 22:00:00 ulogd[1770]: [DESTROY] GW20000001 74.125.239.115 ORIG: SRC=31.16.202.122 DST=255.132.119.71 DN=www.box.com MAC=ja:ck:00:00:00:00 PROTO=TCP SPT=52957 DPT=443 PKTS=5 BYTES=1 , REPLY: SRC=255.132.119.71 DST=31.16.202.122 PROTO=TCP SPT=443 DPT=52957 PKTS=10 BYTES=801 ');
}


udp_client.close();
