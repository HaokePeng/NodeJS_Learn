/**
 * Created by Peng_Haoke on 2016-06-28.
 */
var http = require('http');

//the function will be called every time a request on port 8888
//request is data coming, and response is the data which I want send back to the client/user
function onRequest(request,response){
    //console.log(request.read());
    response.writeHead(200,{"Contect-type": "text/plain"});//status code and obj
    response.write("Welcom to the home page of UofT Course Planner");
    response.end();

}
//it will call onrequest when
http.createServer(onRequest).listen(8888);
console.log("server is listening on port 8888");


