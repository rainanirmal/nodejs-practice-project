const express = require("express");
const connectToMongoDB = require("./connect");
const path = require("path");
const CookieParser = require("cookie-parser");

const URLRouter = require("./routes/url");
const UserRouter = require("./routes/user");


const app = express();

app.set("view engine" , "ejs");
app.set("views" , path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended : false}));
app.use(CookieParser());

connectToMongoDB("mongodb://127.0.0.1:27017/url-shortner")
.then(() => {
    console.log("MongoDB connected !");
})
.catch((err) => {
    console.log("MongoDB error : " + err);
})

app.use('/' , URLRouter);
app.use('/URL' , URLRouter);
app.use('/user' , UserRouter);

app.listen(8000 , () => {
    console.log("Server started !");
})