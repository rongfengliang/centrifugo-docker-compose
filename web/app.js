var Centrifuge = require("centrifuge")
var SockJS = require('sockjs-client');
var jwt = require('jsonwebtoken');
var token = jwt.sign({ sub: 'dalongdemo'}, '05f0842d-c302-4036-a19f-6ac263b9f620');
var centrifuge = new Centrifuge("http://centrifugal:8000/connection/sockjs", {
  sockjs: SockJS
})
centrifuge.setToken(token)
centrifuge.subscribe("news", function(message) {
    console.log(message);
});
centrifuge.connect();

