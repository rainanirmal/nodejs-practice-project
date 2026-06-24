const express = require("express");
const path = require("path");
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' }) 

const PORT = 8000

const app = express();

app.set("view engine" , "ejs");
app.set("views" , path.resolve("./views"));

app.use(express.urlencoded({ extended : false}));

const storage = multer.diskStorage({
  destination: function (request , file , cb) {
    return cb(null , "./uploads");
  },
  filename: function (request , file , cb) {
    return cb(null , `${Date.now()}-${file.originalname}`);
  }
});

const uploads = multer({ storage });

app.get('/' , (request , response) => {
    return response.render("homepage");
})

app.post('/upload' , uploads.single("profileImage") , (request , response) => {
    return response.redirect("/");
});

app.listen(PORT , () => {
    console.log("Server started !");
})