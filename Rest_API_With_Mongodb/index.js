const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/user-management')
.then(() => {
    console.log("MongoDB connected !");
})
.catch((err) => {
    console.log("MongoDB error : " + err);
})

const userSchema  = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
    },
    last_name : {
        type : String,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    gender : {
        type : String,
    },
    job_title : {
        type : String,
    },
})

const User = mongoose.model("user" , userSchema);

app.get('/' , (request , response) => {
    response.end("Hello ! Testing ..");
})

app.listen(8000 , () => {
    console.log("Server started !");
})