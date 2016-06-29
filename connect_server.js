/**
 * Created by Peng_Haoke on 2016-06-28.
 */
var connect = require('connect');
var http = require('http');

var app = connect();

function profile(request,response) {
    console.log("use request profile");
}

function xxx(request,response) {
    console.log("use request xxx");
}

app.use('/profile',profile);
app.use('/xxx',xxx);


//use the app as a requirst listen
http.createServer(app).listen(8888);