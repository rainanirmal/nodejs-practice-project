const express = require("express");
const connectToMongoDB = require("./connect");

const app = express();

connectToMongoDB("mongodb://127.0.0.1:27017/url-shortner")
.then(() => {
    console.log("MongoDB connected !");
})
.catch((err) => {
    console.log("MongoDB error : " + err);
})

app.listen(8000 , () => {
    console.log("Server started !");
})