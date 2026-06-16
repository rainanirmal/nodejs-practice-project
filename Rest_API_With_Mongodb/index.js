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

app.get('/users' , async (request , response) => {
    const allUsers = await User.find({});

    const html = `
    <ul>
        ${allUsers.map((user) => `<li>${user.first_name} - ${user.email}</li>`)}
    </ul>
    `;
    response.send(html);
});

app.get('/api/users' , async (request , response) => {
    const allUsers = await User.find({});

    response.json(allUsers);
})

app.get('/api/users/:id' , async (request , response) => {
    const user = await User.findById(request.params.id);

    response.json(user);
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

app.patch('/api/users/:id' , async (request , response) => {
    const body = request.body;

    await User.findByIdAndUpdate(request.params.id , {
        first_name : body.first_name ,
        last_name : body.last_name , 
        email : body.email , 
        gender : body.gender , 
        job_title : body.job_title
    });

    return response.json({ msg : "Success"});
});

app.delete('/api/users/:id' , async (request , response) => {
    const user = await User.findByIdAndDelete(request.params.id);

    return response.json({ msg : "Deleted successfully"});
} )

app.listen(8000 , () => {
    console.log("Server started !");
})