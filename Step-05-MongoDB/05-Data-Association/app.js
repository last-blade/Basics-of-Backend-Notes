const express = require("express");
const app = express();

const userModel = require("./models/userModel");
const postModel = require("./models/posts");

app.get("/", function(request, response){
    response.send("Home Page");
});

app.get("/create", async function(request, response){
    // response.send("Create Page");
    let createdUser = await userModel.create(
        {
            username: "prashant",
            age: 22,
            email: "prashant@gmail.com"
        }
    )
    response.send(createdUser);
});


app.get("/post/create", async function(request, response){
    let post = await postModel.create(
        {
            postdata: "Hello kaise ho sab",
            user: "66c6a9243519781ae9609ea9",
        }
    )
    let user = await userModel.findOne({_id: "66c6a9243519781ae9609ea9"});
    user.posts.push(post._id);
    await user.save()
    response.send({ post, user }); 
})


app.listen(3000);