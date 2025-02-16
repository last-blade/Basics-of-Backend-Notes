const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", function(request, response){
    response.send("Home Page");
})

app.get("/profile/:username", function(request, response){
    response.send(`Welcome ${request.params.username}`);
});

app.get("/book/:name/:year", function(request, response){
    response.send(`Book: ${request.params.name} and Published in ${request.params.year}`)
});


app.listen(3000, function(){
    console.log("chal raha hai")
});