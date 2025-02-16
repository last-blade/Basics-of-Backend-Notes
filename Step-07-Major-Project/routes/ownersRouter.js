const express = require("express");
const router = express.Router();

const ownerModel = require("../models/owner-model");
const isAdminLoggedIn = require("../middlewares/isAdminLoggedIn");

// console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV){
    router.post("/create", async function(request, response){
        let owners = await ownerModel.find();

        if(owners.length > 0) {
            return response.status(503).send("You don't have permission to create a new owner!");
        } 


        let {fullname, email, password} = request.body;
            // return response.send("You can create owner");            
        let createdOwner = await ownerModel.create(
            {
                fullname,
                email,
                password
            }
        )
        response.status(201).send(createdOwner);  
    });

}

router.get("/admin", isAdminLoggedIn, function(request, response){
    let success = request.flash("success");
    response.render("createproducts.ejs", {success});
});
 
module.exports = router;