
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

const cookieParser = require("cookie-parser");
app.use(cookieParser());

//encrypt kar diya humne email-id ko
app.get("/", function(request, response){
    const tokenVal = jwt.sign({email: "prashant@gmail.com"}, "secret"); //iss "secret" string ke basis par hi meri email id encrypt hogi
    response.cookie("token", tokenVal); // "token" naam ki cookie ke andar ek string bhej di(jo ki just neeche output mein dikkh rahi hai) jsika naam tokenVal hai
    console.log(tokenVal) //OUTPUT:- eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InByYXNoYW50QGdtYWlsLmNvbSIsImlhdCI6MTcyNDIxMjUxMX0.aoyzuiDlyh9JAHdQ_tM_ziTivn-wuZGfDR-vb-3kyfQ
    response.send("chal raha hai")
});

//decrypt karenge
app.get("/read", function(request, response){
    let data = jwt.verify(request.cookies.token, "secret");
    console.log(data); //OUTPUT:- { email: 'prashant@gmail.com', iat: 1724213107 }
});


app.listen(3000);