const mongoose = require("mongoose");
mongoose.connect(`mongodb://127.0.0.1:27017/dataassociation`);


let userSchema = mongoose.Schema(
    {
        username: String,
        email: String,
        age: Number,
        posts: [
            {
                type: mongoose.Schema.Types.ObjectId, // 'posts' array mein har ek post ki 'objectId' hogi i.e. hum post kaa poora data nahin rakhenge, kewal post ki id store karenge array mein, jisse pata chal sake ki kaunsi post hai
                ref: 'post' // or yeh post ki id's kis model se belong karengi uska reference bhi diya hai, toh yeh 'post' model se belong karengi objectIds, humne post model banaya hai, post.js mein jaake dekhenege toh model kaa naam humne 'post' rakha hai
            }
        ]
    }
)


module.exports = mongoose.model("user", userSchema);