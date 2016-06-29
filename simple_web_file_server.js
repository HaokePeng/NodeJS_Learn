/**
 * Created by Peng_Haoke on 2016-06-28.
 */
var http = require('http');
var fs = require('fs');
function Response404(response) {
    response.writeHead(404,{"Contect-type": "text/plain"});
    response.write("page is not avaliable");
    response.end;
}
//the function will be called every time a request on port 8888
//request is data coming, and response is the data which I want send back to the client/user
function onRequest(request,response){
    console.log(request.method,request.url);



    if (request.method == "GET" && request.url==='/'){
        response.writeHead(200,{"Contect-type": "text/html"});//status code and obj
        //response.write("page is avaliable");
        fs.createReadStream("/Users/Peng_Haoke/Desktop/NodeJS_Learn/index.html").pipe(response);

    }else{
        console.log("i am now in the else loop");
        response.writeHead(404,{"Contect-type": "text/plain"});//status code and obj
        response.write("page is not avaliable");
        response.end();
    }


}
//it will call onrequest when

http.createServer(onRequest).listen(8888);
console.log("server is listening on port 8888");
