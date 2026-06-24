const express = require("express");
const path = require("path");

const PORT = 8000

const app = express();

app.set("view engine" , "ejs");
app.set("views" , path.resolve("./views"));

app.get('/' , (request , response) => {
    return response.render("homepage");
})

app.listen(PORT , () => {
    console.log("Server started !");
})