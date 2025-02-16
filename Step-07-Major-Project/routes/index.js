const express = require("express");
const router = express.Router();

const isLoggedIn = require("../middlewares/isLoggedIn");
const productModel = require("../models/product-model");
const userModel = require("../models/user-model");
const { func } = require("joi");

router.get("/", function(request, response){
    let error = request.flash("error");
    response.render("index", {error, loggedin: false});
});

router.get("/shop", isLoggedIn, async function(request, response){
    let products = await productModel.find();
    response.render("shop.ejs", {products});
});

router.get("/cart", isLoggedIn, async function(request, response){
    let user = await userModel.findOne({email: request.user.email}).populate("cart");
    response.render("cart.ejs", {user});
});

router.get("/addtocart/:productId", isLoggedIn, async function(request, response){
    let user = await userModel.findOne({email: request.user.email});
    user.cart.push(request.params.productId);
    await user.save();
    response.redirect("/shop");
});

router.get("/admin", function(request, response){
    response.render("admin.ejs");
})

// router.get("/admin", function(request, response){
//     response.render(admin.ejs)
// })


module.exports = router;