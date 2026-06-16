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
    first_name : {
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

app.use(express.urlencoded({ extended : false}));

app.get('/' , (request , response) => {
    response.end("Hello ! Testing ..");
})

app.post('/api/users' , async (request , response) => {
    const body = request.body;

    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        return response.json({ msg : "All fields are required !"});
    }

    const result = await User.create({
        first_name : body.first_name , 
        last_name : body.last_name ,
        email : body.email ,
        gender : body.gender , 
        job_title : body.job_title
    });

    console.log("Result : " + result);

    return response.json({ msg : "User created successfully"});
});

app.listen(8000 , () => {
    console.log("Server started !");
})