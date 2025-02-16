/*
--> Encryption ke liye humein 'bcrypt' package ki need padti hai....and isse humein ek large string milti hai jo ki
    har baar string alag alag generate hogi or iss string kaa use karke hum apne password ko encrypt kar paayenge. or iske liye
    humein yeh code likhna padta hai, see below:-

    const bcrypt = require('bcrypt');
    const saltRounds = 10;
    const myPlaintextPassword = 'prashant@021011';

    bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        // Store hash in your password DB.
    });
});

--> "genSalt" means generating the salt and salt is a "string",  or yeh wahi string hai jo maine oopar bataya hai. 
--> fir ek string(i.e. salt) generate hogi and fir iske baad iss salt ko hum bcrypt.has wale function mein(see line no. 11)
    as a parameter paas kar dete hain, and ek plaintextpassword as a parameter paas karte hain(i.e. jo password humein encrypt
    karna hai) and iss function mein hum apne plain password ko uss string(i.e. salt) ke saath mein mixup karke ek naya 
    password banate hain jo ki encrypted hota hai hai woh password, suppose maine ek plain password as a parameter pass kiya
    or fir jo salt generate hua hai uske saath mein maine apne ko kuch aisa mixup kiya jisse ki mera ek new encrypted
    string (my encryted password) generate huyi.
*/




//1. Encryption-----------------------------------------------------------------------------------------------------------------------
// iss neeche wale part mein humne "Encrypt" toh kar liya apne password ko, ab humein decrypt bhi toh karna padega
const express = require("express");
const app = express();

const bcrypt = require("bcrypt");

app.get("/", function(request, response){
    const saltRounds = 10;
    const myPlainTextPassword = "Prashant@021011"
    bcrypt.genSalt(saltRounds, function(err, salt){
        console.log(salt); // randowm string 
        bcrypt.hash(myPlainTextPassword, salt, function(err, hash){
            console.log(hash); // my decrypted password
        });
    });
});



//1. Decryption-----------------------------------------------------------------------------------------------------------------------
const myPlaintextPassword = "Prashant@021011";
const myEncryptedPassword = "$2b$10$C3QHSkFcwrye6jOd8vU.zegkw3mz57g.53l6AcA90gjm213CKTyYK";
bcrypt.compare(myPlaintextPassword, myEncryptedPassword).then(function(result) {
    console.log(result); // Output:- TRUE
});

/*
--> Jo password humne encrypt kiya tha "Prashant@021011" and fir ek encrypted password(i.e. hash) generate hua tha or fir humein
    uss hash ko decrypt karna hai....toh humne bcrypt.compare kaa use karke humne apne password ko decrypt kar diya, and agar
    hash match karta hai toh fir "true" output aayega else "false" output aayega
*/

app.listen(3000);