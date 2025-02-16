//Express.js framework Introduction

/*
Express js ek npm package hai, we can install express js  by this command:  "npm install express"
express js manages everything from receiving the request and giving the response.
Express.js is a popular and minimal web application framework for Node.js. It provides a robust set of features
for building web and mobile applications, making it easier to manage server-side logic, handle HTTP requests and
responses, and create APIs.

In other words:- Suppose ek server hai facebook kaa America mein and main India mein baithe huye Facebook chala raha hoon
                and maine koi request bheji hai jaise facebook ke server par, toh toh reuqest India se America tak jaaygi
                Facebook ke server ke paas mein and fir jo maine request bheji hai woh receive hogi, and the iske baad 
                se expressJs kaa kaam shuru hota hai, i.e. reuest accept karne ke baad se jo bhi kaam hoga i.e. request
                ko process karta hai expressjs, calculation karta hai ki kya response send karna hai yeh sab cheezein
                ExpressJs hi sambhalta hai

                -->reuest receive karna, request ko process karna, data ko bahar nikalna, etc. yeh sab expressjs karta hai
                databses se server ko connect karna yeh sab expressjs kaa hi kaam hai
 */

/**
Framework:- framework humein ek flow provide karata hai yahi ek flow hai kisi cheez ko karne kaa and isko follow karna hi
            padega, suppose ek flow hai ki mujhe subah utthna hai, nahana hai, khaana hai padhna hai or so jaana hai,
            toh yeh ek flow hai ki mujhe issi sequence mein follow karna hai, and ismein main naha kaise raha hoon, 
            or khaane mein 1 roti khaa raha hoon yaa 2 roti khaa raha hoon yeh mere oopar hai, bas yeh ek procedure hai
            jo mujhe follow karna hi padega.

in technical words:- agar mujhe flow mein sabse pehle 'express' ko require karna hai toh require karna hi padega, and
                    fir iss flow mein fir humein 'routes' create karne hain toh fir karne hi padenge, skip nahin kar sakte
                    or fir iss flow mein humein 'listen' karna ahi rotes create ke baad toh fir listen karna hi padega,
                    par 'routes' mein jo hum dena chahte hain woh hum decide karenge.
                    require-->create routes-->listen  is procedure ko follow karna hi padega pehle reuire, fir routes and
                    then listen, toh yahi hai framework ki humein framework mein procedures follow karne hi padte hain.            
*/



//-----------------------------------------------------------------------------------------------------------------------------------

//-> setting up a basic express application 
const express = require('express') // const express jo hai ek constant hai but yeh ek function hai jismein express ki saari cheezein hain
const app = express(); // or fir jab iss function ko run karenge toh fir iski saari functionalities jo hain 'app' naam ke varible mein aa jayengi

app.get("/", function (request, response) { /* ismein slash(/) ek port hai, jaise ki "youtube.com" toh fir ismein by default
                                                slash(/) added hota hai suffix mein, i.e. slash ek route hai jaise ki 
                                                http://localhost/3000 mein slash 3000 ek route hai   */
    response.send('Hello World')
})

app.get("/profile", function(request, response){
    response.send("My name is Prashant")
})

app.listen(3000);

/*
google mein jaake check karunga toh maine 3000 port par host kiya hai,  http://localhost:3000 iss par jaunga toh fir "Hello World"
show hoga display par(because see line no. 47) and jab main alst mein slash profile  (http://localhost:3000/profile) likh dunga
toh fir "My name is Prashant" show hoga (because see line no. 51)
*/