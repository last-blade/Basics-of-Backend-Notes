const userModel = require("../models/user-model");
const productModel = require("../models/product-model");
const adminModel = require("../models/admin-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const {generateToken} = require("../utils/generateToken");
const { func } = require("joi");




module.exports.registerUser =  async function(request, response){
    try{
        let {email, password, fullname} = request.body;

        let user = await userModel.findOne({email: email});

        if(user){
            return response.status(401).send("Already have an account with this email, please login!");
        }

        bcrypt.genSalt(10, function(err, salt){
            console.log("salt:- ", salt);
            bcrypt.hash(password, salt, async function(err, hash){
                if(err){
                    return response.send(err.nessage);
                }

                else{
                    let user = await userModel.create(
                        {
                            email,
                            password: hash,
                            fullname
                        }
                    );
                    // let token = jwt.sign({email, id: user._id}, "secretstring"); iss jwt ko maine utils wale folder mein ek file(i.e. generateToke) banake usmein daal diya hai alag se
                    let token = generateToken(user);
                    response.cookie("token", token);
                    console.log("token:- ", token);
                    response.send(user);
                    console.log("user created successfully!");
                }
                console.log("hash:- ", hash);
            })
        })
    }

    catch(err){
        console.log(err.message);
    }
}

module.exports.loginUser = async function (request, response) {
    let { email, password } = request.body;
  
    let user = await userModel.findOne({ email });
  
    if (!user) {
      return response.send("Email or password is incorrect!");
    } 
    
    else {
      bcrypt.compare(password, user.password, async function (err, result) {
        if (err) {
          return response.status(500).send("Internal server error");
        }
        
        if (result) {
          let token = generateToken(user);
          response.cookie("token", token);
          console.log("You can login");
          let products = await productModel.find();
          return response.render("shop.ejs", { products });
        } 
        
        else {
          return response.send("Email or password is incorrect!");
        }
      });
    }
};  

module.exports.logout = function(request, response){
  response.cookie("token", "");
  response.redirect("/");
}


module.exports.adminLogin = async function(request, response){
  let {email, password} = request.body;
  let admin = await adminModel.findOne({email});
  if(!admin){
    request.flash("Incorrect", "Email or password is incorrect!");
    return response.status(401).send("Email or password is incorrect!");
  }

  else{
    bcrypt.compare(password, admin.password, async function(err, result){
      if (err) {
        return response.status(500).send("Internal server error");
      }
      if (result) {
        let token = generateToken(admin);
        response.cookie("token", token);
        console.log("Admin can login");
        return response.render("admin.ejs");
      } 
      
      else {
        return response.send("Email or password is incorrect!");
      }
    });
  }
}