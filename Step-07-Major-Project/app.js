require("dotenv").config();
console.log("EXPRESS_SESSION_SECRET:", process.env.EXPRESS_SESSION_SECRET);  
const express = require("express");
const app = express();

const database = require("./config/mongoose-connection");

const cookieParser = require("cookie-parser");
app.use(cookieParser()); 
const path = require("path");

const expressSession = require("express-session");
const flash = require("connect-flash");


app.use(
    expressSession({
        resave: false,
        saveUinitialized: false,
        secret: process.env.EXPRESS_SESSION_SECRET,
    })
);
app.use(flash());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");



const ownersRouter = require('./routes/ownersRouter');
const usersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productsRouter');
const homePageRouter = require('./routes/index');
const adminRouter = require('./routes/adminRouter');
const { adminLogin } = require("./controllers/authController");



app.use("/", homePageRouter);
app.use("/owners", ownersRouter);
app.use("/products", productsRouter);
app.use("/users", usersRouter);
app.use("/admin", adminRouter);

app.post("/admin", adminLogin, function(request, response){
    response.render("admin.ejs");
})

app.listen(3000);