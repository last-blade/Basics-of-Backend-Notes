
const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public'))); /* static kaa matlab hai humari saari static files, folders, like css, 
                                                            javascript, etc and dirname kya hai, dirname jo hai humare current 
                                                            folder tak kaa path provide kara raha hai and public isliye likha 
                                                            kyoki hum iss folder tak toh aa gaye hain but fir humein public 
                                                            folder mein bhi jaana hai jisse ki hum apni static file ko access 
                                                            kar sake 
                                                        */
app.set('view engine', 'ejs') /* iska matlab hai ki humara jo backend hai woh kya render karega i.e. kya 'view' karega ya
                                fir kya show karega, toh ejs file render or show karega, (app.set("view engine", "ejs"): This is 
                                the correct way to set the view engine to ejs, which allows you to render .ejs templates 
                                without needing to specify the extension.)  
                            */


app.get("/", function(request, response){
    response.render("index.ejs") /* ab hum 'send' ki jagah 'render' keyword kaa use kar rahe hain, or index.ejs
                                wali file render kar rahe hain jo ki 'views' naam ke folder mein hai yeh file, or humein
                                poora file kaa naam likne i need nahin hai 'ejs' extension ke saath mein, kewal 'index' file 
                                kaa naam bhi likh sakte hain kyoki humne 'ejs' setup kiya hai (line no. 8 par) toh fir 
                                extension dene ki zaroorat nahin hai(see line no. 11) */
});

app.listen(3000, function(){
    console.log("Chal raha hai");
});