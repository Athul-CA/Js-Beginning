var http= require("http");
http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("It's Alive!!");
    response.end();
}).listen(3000);