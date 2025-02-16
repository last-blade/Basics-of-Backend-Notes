/*
Expressjs ke paas khud kaa default error handler hota hai
*/

const express = require("express");
const app = express();

app.use(function(reuqest, response, next){
    console.log("Middleware");
    next();
})

app.get("/", function(reuqest, response){
    response.send("Home Page");
});

app.get("/profile", function(reuqest, response, next){
    return next(new Error("Error aayi hai"));
});

// below is the default errorhandler of expressjs
app.use(function(err, request, response, next){
    console.log(err.stack);
    response.status(500).send("Something went wrong");
})

app.listen(3000);