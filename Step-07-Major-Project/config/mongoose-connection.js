const mongoose = require("mongoose");
const config = require("config");
const debugg = require("debug")("development:mongoose");



mongoose.connect(`${config.get("MONGODB_URI")}/majorProject`)
.then(function(){
    debugg("Databse connected successfully!");
})

.catch(function(err){
    debugg(err);
});


module.exports = mongoose.connection; // 'mongoose.connection' ke through humein apne majorProject naam ke database par full control mil jaayega
