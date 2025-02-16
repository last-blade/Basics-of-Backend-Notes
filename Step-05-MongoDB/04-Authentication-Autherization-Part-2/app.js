const express = require("express")
const app = express();
const path = require("path")
const userMode = require("./models/userModel");
app.set("view engine", "ejs");
const jwt = require("jsonwebtoken");
const cookiePraser = require("cookie-parser");
const userModel = require("./models/userModel");
app.use(cookiePraser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
const bcrypt = require("bcrypt");

app.get("/", function(request, response){
    // response.send("Chal raha hai");
    response.render("index.ejs")
});


app.post("/create", function(request, response){
    let {username, email, password, age} = request.body;
    bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(password, salt, async function(err, hash){
            console.log(hash);
            let createdUser = await userModel.create(
                {
                    username, 
                    email, 
                    password: hash, 
                    age
                }
            )
            let token = jwt.sign({email}, "secretstring");
            response.cookie("token", token);
            response.render("accountCreated.ejs");
            response.send(createdUser);
        })
    })
});

app.get("/logout", function(request, response){
    response.cookie("token", "");
    response.redirect("/");
});

app.get("/login", function(request, response){
    response.render("login.ejs");
})

app.post("/login", async function(request, response){
    let user = await userModel.findOne({username: request.body.username});

    if(!user){
        response.send("Username or password is incorrect");
    }

    else{
        bcrypt.compare(request.body.password, user.password, function(err, result){
            if(result == true){
                let token = jwt.sign({username: user.username}, "secretstring");
                response.cookie("token", token);
                response.send("Your Account Logged In :)");
            }
            else{
                response.send("Username or password is incorrect");
            }
        });
    }
})

app.listen(3000);