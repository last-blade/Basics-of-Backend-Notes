const mongoose = require("mongoose");

const adminSchema = mongoose.Schema(
    {
        fullname: {
            type: String,
            minLength: 3,
            trim: true
        },

        email: String,

        password: String,

        contact: Number,

        picture: String,
    }
)

module.exports = mongoose.model("admin", adminSchema);