const mongoose = require('mongoose');
mongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`);

//1.-> mongoose.Schema() ek methoda hai jo ki accept karta hai object and iss method se hum schema banate hain like kya kya attributes chahiye, see below:
const userSchema = mongoose.Schema(
    {
        name: String,
        username: String,
        email: String
    }
);

/*2.-> Ab hum 'model' create karenge and iss model ke basisi par hi hum CRUD operation perform kar sakte hain, so it is necessary */
module.exports = mongoose.model("user", userSchema); /* 'user' naam kaa model create kiya hai and second parameter mein hum batatae hain ki
                                        hum schema kaunsa use karna chahte hain, toh humne 'userSchema' use kiya hai jo humne
                                        oopar banaya hai line no.5 par 'userSchema' naam se.
                                        
                                        --> module.exports isliye lagaya hai agar user jo hai maanlo login, delete jaise
                                            actions perform karna chahta hai toh fir yeh action jo hain route par hi karega, 
                                            or route par karega toh fir humein 'model' ko export karna padta hai. 
                                        --> Ab export kiya hai toh fir import bhi karna padega ab, toh hum isko 'app.js' wali
                                            file mein import karenge 'require' keyword kaa use karke, see 'app.js' file.  
                                        */
