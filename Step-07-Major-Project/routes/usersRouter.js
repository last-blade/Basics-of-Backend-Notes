const express = require("express");
const router = express.Router();
const {registerUser, loginUser, logout} = require("../controllers/authController");


router.get("/", function(request, response){
    response.send("User Page");
});

router.post("/register", registerUser);

router.post("/login", loginUser)

router.get("/logout", logout)

module.exports = router; 