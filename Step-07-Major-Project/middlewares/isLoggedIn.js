const jwt = require("jsonwebtoken");
const userModel = require("../models/user-model");

module.exports = async function(request, response, next){
    let {email} = request.body;
    let user = userModel.findOne({email});
    // console.log("User:- ", user);
    console.log(email);

    if(email === undefined){
        request.flash("error", "User not found");
        response.redirect("/");
    }

    else{
        if(!request.cookies.token){
            request.flash("error", "You need to login first!");
            return response.redirect("/");
        }
    
        try{
            let decoded = jwt.verify(request.cookies.token, process.env.JWT_KEY);
            
            let user = await userModel.findOne({email: decoded.email}).select("-password"); //password ko exclude kar diya, since main jab userModel ko fetch akrunga toh fir uss user kaa poora data aa jaayega or usmein password bhi aa jaayega, toh humein password nahin chahiye, isliye humne "select" keyword kaa use kiya hai
            request.user = user;
            next();
        }
    
        catch(err){
            request.flash("error", "Something went wrong");
            response.redirect("/");
        }
    }
}