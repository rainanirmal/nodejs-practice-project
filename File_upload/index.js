const express = require("express");
const path = require("path");
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' }) 

const PORT = 8000

const app = express();

app.set("view engine" , "ejs");
app.set("views" , path.resolve("./views"));

app.use(express.urlencoded({ extended : false}));

app.get('/' , (request , response) => {
    return response.render("homepage");
})

app.post('/upload' , upload.single("profileImage") , (request , response) => {});

app.listen(PORT , () => {
    console.log("Server started !");
})