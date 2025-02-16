const { adminLogin } = require("../controllers/authController");
const adminModel = require("../models/admin-model");

const express = require("express");
const router = express.Router();

router.get("/login", function(request, response){
    response.render("adminLogin.ejs");
});



module.exports = router;