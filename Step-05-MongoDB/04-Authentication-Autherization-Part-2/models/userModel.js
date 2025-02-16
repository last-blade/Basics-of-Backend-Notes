const mongoose = require("mongoose");
mongoose.connect(`mongodb://127.0.0.1:27017/authtestapp`);

const userSchema = mongoose.Schema(
    {
        email: String,
        username: String,
        password: String,
        Age: Number
    }
);

module.exports = mongoose.model("user", userSchema);