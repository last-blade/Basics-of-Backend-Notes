//Q-> Kisi bhi middleware ko likhne se pehle humein 2 middleware or likhne padte hain, but Why ?

/*
Answer-> Suppose maine apni e-mail id and password se login kiya hai toh fir woh id-password jo hai ek unreadable stream mein
        server par jaati hai (i.e. Blob) or iss unreadable stream ko server read nahin kar sakta isliye humein iss stream ko
        readable format mein convert karna padta or iss conversion ke liye hum 2 middleware lagate hain code ki starting mein.

Conclusion:- mere browser se jitni bhi information jaati hai server par, woh saari information blob(i.e. unreadable stream or format)
            woh information geolocation, id, password, etc. kuch bhi ho sakti hai, or yeh information unreadable format(blob)
            mein server par jaati hai. Or fir humein iss Blob ko readable format mein convert karne ke liye 2 middleware
             lagane apdte hain        
*/


const express = require("express");
const app = express();

app.use(express.json()); // Middleware-1 it converts into json format

app.use(express.urlencoded({extended: true})); // middleware-2 yeh middleware ek doosre type ke data ko read karne ke kaam aata hai

app.use(function(request, response, next){
    console.log("Middleware-1 chala gaya");
    next();
})

app.get("/", function(request, response){
    response.send("Home Page");
});

app.listen(3000);