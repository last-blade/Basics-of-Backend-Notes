const express = require("express");
const app = express();
const path = require("path");
const userModel = require("./models/user");
const { request } = require("http");


app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));



app.get("/", function(request, response){
    response.render("index.ejs");
});

app.get("/read", async function(request, response){
    let allUsers = await userModel.find();
    response.render("read.ejs", {users: allUsers});
});


app.post("/create", async function(request, response){
    let createdUser = await userModel.create(
        {
            name: request.body.name,
            email: request.body.email,
            image: request.body.image
        }
    )
    response.redirect("/read");
})

app.get("/delete/:id", async function(request, response){
    let deletedUser = await userModel.findOneAndDelete({_id: request.params.id});
    response.redirect("/read");
})

app.get("/edit/:id", async function(request, response){
    let editedUser = await userModel.findOne({_id: request.params.id});
    response.render("edit.ejs", {editedUser});
})

app.post("/update/:id", async function(request, response){
    let {name, email, image} = request.body;
    let updatedUser = await userModel.findOneAndUpdate({_id:request.params.id}, {name, email, image}, {new:true});
    response.redirect("/read");
})

 
app.listen(3000);