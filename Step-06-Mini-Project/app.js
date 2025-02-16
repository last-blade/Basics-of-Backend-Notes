const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const path = require("path");
app.set("view engine", "ejs");

const userModel = require("./models/user");
const postModel = require("./models/posts");
const upload = require("./utils/multer");
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));







app.get("/", function(request, response){
    response.render("index.ejs");
});


app.get("/profile/upload", function(request, response){
    response.render("profileUpload.ejs");
});


app.post("/upload", isLoggedIn, upload.single("image"), async function(request, response){
    // response.render("profileUpload.ejs");
    console.log(request.file);
    let user = await userModel.findOne({email: request.user.email});
    user.profilepic = request.file.filename;
    await user.save();
    response.redirect("/profile");
});

app.get("/login", function(request, response){
    response.render("login.ejs");
});


app.get("/profile", isLoggedIn, async function(request, response){
    let user = await userModel.findOne({email: request.user.email}).populate("posts")
    // console.log(user);
    response.render("profile.ejs", {user});
});

app.get("/like/:id", isLoggedIn, async function(request, response){
    let post = await postModel.findOne({_id: request.params.id}).populate("user")
    // console.log(user);
    if(post.likes.indexOf(request.user.userid) === -1){
        post.likes.push(request.user.userid);
    }
    else{
        post.likes.splice(post.likes.indexOf(request.user.userid), 1);
    }
    await post.save();
    response.redirect("/profile");
});

app.get("/edit/:id", isLoggedIn, async function(request, response){
    let post = await postModel.findOne({_id: request.params.id}).populate("user");
    response.render("edit.ejs", {post});
});


app.post("/update/:id", isLoggedIn, async function(request, response){
    let post = await postModel.findOneAndUpdate({_id: request.params.id}, {content: request.body.postcontent});
    response.redirect("/profile");
});


app.post("/post", isLoggedIn, async function(request, response){
    let user = await userModel.findOne({ email: request.user.email });

    if (!user.post) {
        user.post = [];
    }

    // let { postcontent } = request.body;
    let myPost = await postModel.create({
        user: user._id,
        content: request.body.postcontent
    });

    user.posts.push(myPost._id);
    await user.save();
    response.redirect("/profile");
});


app.post("/register", async function(request, response){
    let {email, username, password, age, name} = request.body;
    let user = await userModel.findOne({email});
    if(user){
        return response.status(500).send("Already has an account with this username");
    }

    bcrypt.genSalt(10, function(err, salt){
        console.log("salt:- ", salt);
        bcrypt.hash(password, salt, async function(err, hash){
            console.log("hash:- ", hash);
            let foundedUser = await userModel.create(
                {
                    email,
                    username,
                    password: hash,
                    age,
                    name
                }
            );
            let token = jwt.sign({email: email, userid: foundedUser._id}, "secretstring");
            response.cookie("token", token);
            // response.send("Account created successfully!");
            response.redirect("/login");
        });
    });
});


app.post("/login", async function(request, response){
    let {email, password} = request.body;
    let user = await userModel.findOne({email});
    if(!user){
        return response.status(500).send("User not found");
    }
    
    bcrypt.compare(password, user.password, function(err, result){
        if(result == true){
            let token = jwt.sign({email: email, userid: user._id}, "secretstring");
            response.cookie("token", token);
            response.status(200).redirect("/profile");
            // response.send("Account logged In!");

        }

        else{
            response.render("login", {result: false}); 
        }
    })

});

app.get("/logout", function(request, response){
    response.cookie("token", "");
    // response.send("Logout successfully!");
    response.redirect("/login");
})

function isLoggedIn(request, response, next){
    if(request.cookies.token === ""){
        // response.send("Login your account please !");
        response.redirect("/login");
    }

    else{
        let data = jwt.verify(request.cookies.token, "secretstring");
        request.user = data;
        next();
    }
}



app.listen(3000);


