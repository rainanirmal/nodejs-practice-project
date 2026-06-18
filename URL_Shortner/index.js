const express = require("express");
const connectToMongoDB = require("./connect");
const path = require("path");
const URLRouter = require("./routes/url");

const app = express();

app.set("view engine" , "ejs");
app.set("views" , path.resolve("./views"));

app.use(express.json());

connectToMongoDB("mongodb://127.0.0.1:27017/url-shortner")
.then(() => {
    console.log("MongoDB connected !");
})
.catch((err) => {
    console.log("MongoDB error : " + err);
})

app.use('/URL' , URLRouter);
app.use('/' , URLRouter);

app.listen(8000 , () => {
    console.log("Server started !");
})