const express = require("express");
const app = express();


/*
Syntax of middleware:- 
    app.use(function(req, res, next){
    
    //your code
    next();
})
*/

/*

--> Middleware ke baare mein maine theory mein likh diya hai (middleware file ke naam me), now in this hum dekhenge
    ki middleware kaise use karte hain or kya syntax or code hota hai.

--> toh neeche maine middleware laga diya hai 'app.use' jo hai wahi middleware hai, toh jab bhi kisi bhi
    route(like slash about, slash profile, slash home, etc) par user jaane ki koshish karega toh fir sabse pehle
    middleware run karega tab fir route par jaayega response, toh pehle user jo hai kuch url daalega like, faceboo.com/profile
    fir yeh request server par jaayegi accept bhi ho jaayegi, iske baad fir middleware par jaayegi, fir uske baad response jaayega
    route par, i.e. user ke frontend par show hoga response.
*/



app.use(function(request, response, next){
    console.log("Middleware-1 chal gaya");
    next();
});

/* pehle yeh oopar wala middleware chalega, yahan par request, response kaa matlab toh humein pata hai, but yeh 'next' kya
nayi cheez aa gayi hai yahan par, toh ek example se samajhte hain,  jaise ki humein pata hai ki route par jaane se pehle
hamesha middleware chalega, toh sabse pehle frontend i.e. user jo hai browser par url enter karega suppose facebook.com/about
toh fir yeh request server par gayi, fir middleware-1 ke paas chali gayi or middleware-1 chal gaya oopar wala, but agar hum 'next'
nahin lagayenge toh fir response jo hai middleware ke baad user ke frontend par nahin jaayega, i.e. user ki taraf se
request gayi ki server ke paas mein ki bhai mujhe 'slash about' chahiye or server ne accept karli, fir middleware bhi chal gaya,
but fir user ke paas response nahin gaya kyoki humne 'next' kaa use hi nahin kiya, iss next ki wajah se hi toh route par mera
ressponse send hoga, agar next nahin lagaunga toh fir mera loading wala circle jo hai ghoomta rahega or page load hi nahin
hoga, kyoki route /about wale route par respinse forward hi nahin kiya, so next() kaa lagana is compulsory.
*/

/*
--> toh ab ooapr next lagaya hai toh fir hum agle middleware i.e. neeche wale middleware par jaayenge, agar hum oopar next() 
    nahin lagate toh fir yeh neeche wala middleware bhi nahin chalta or naa hi aage koi saa code chalta, jo neeche home page, and
    about page bana rakha hai maine.

--> lekin humne oopar wale middleware mein next() laga rakha hai toh fir neeche wala middleware bhi chalega.    
*/


app.use(function(request, response, next){
    console.log("Middleware-2 chal gaya");
    next();
});

// fir yeh wala middleware chalega oopar wala

/*
-->agar iss oopar wale middleware-2 par next nahin lagate toh fir neeche wale home-page and about-page wale route nahin chalenge
*/

app.get("/", function(request, response){
    response.send("Home Page");
});

// fir tab jaake ab 'slash' route par response jaayega

app.get("/about", function(request, response){
    response.send("About Page");
});

// or /about route par bhi jaayega response

app.listen(3000);


/**
Oopar 2-2 middleware laga rakhe hain maine, kitne bhi middleware laga sakte hain hum, or yeh jo oopar process ho
raha hai poora kaa poora iss poore process ko hum reuqest and response handling bolte hain 
 */
