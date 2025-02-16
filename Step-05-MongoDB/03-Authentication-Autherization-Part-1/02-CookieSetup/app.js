const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();


app.use(cookieParser()); // iss middleware ko lagane se hum cookie ko console.log() kara sakte hain....but iske liye pehle cookie-parser naam kaa package install karna padta hai('npm i cookie-parser')

app.get("/", function(request, response){
    response.cookie("name", "Prashant"); // cookie kaa naam hai "name" and cookie ke andar data (i.e. "Prashant" string) hai ek string, and this how we set the cookie
    response.send("Home Page");
    console.log(request.cookies); // isko print karane ke liye humne cookie-parser package ko install kiya hai
});

app.get("/read", function(request, response){
    console.log(request.cookies);
    response.send("read page");
})

app.listen(3000);


/*
NOTE:- 
Q:- Cookie kaise save hoti hai browser par or kaise banti hai cookie ?
A:- suppose main facebook login kar raha hoon....or maine id, and password enter kare or fir woh id password jaayenge server par and 
    password check hoga, agar sahi hua toh fir server jo hai ek string (i.e. cookie) send karega user ke browser par and yeh cookie
    browser par store ho jaayegi, and jab bhi main koi request bhejuga server par toh fir woh cookie (or string) jo hai meri
    request ke saath chipak kar jaayegi, jisse ki mujhe baar baar login karne ki need nahin hai

*/