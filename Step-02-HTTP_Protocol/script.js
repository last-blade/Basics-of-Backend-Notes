const http = require("http");

//------------------------------------------------------------------------------------------------------------------------------------

/*
1. Create server synatx:-  http.createServer([options][, requestListener])
    
    ismein options ek <Object> hain
    requestListener ek <Function> hai
    Returns a new instance of http.Server.

*/

const myServer = http.createServer(function(request, response){
    response.end("Hello my name is Prashant");
});

myServer.listen(3000);

/*
oopar code se maine ek server create kar diya or maine iss server ko port no. 3000 par host kar diya and uss par or jab main
http://localhost:3000/ ko chrome mein jaake URL mein daalunga toh wahan "Hello my name is Prashant" show hoga
*/