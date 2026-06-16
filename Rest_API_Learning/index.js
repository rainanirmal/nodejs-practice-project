const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();
const PORT = 8000;

// Middleware
app.use(express.urlencoded({ extended : false }));

// Routes
app.get("/users" , (request , response) => {
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`)}
    </ul>
    `;
    response.send(html);
});

app.get("/api/users" , (request , response) => {
    response.json(users);
});

app.get("/api/users/:id" , (request , response) => {
    const id = Number(request.params.id);
    const user = users.find((user) => user.id === id);
    response.json(user);
});

app.post("/api/users" , (request , response) => {
    const body = request.body;
    console.log(body);
    users.push({...body , id: users.length + 1});
    fs.writeFile('./MOCK_DATA.json' , JSON.stringify(users) , (err , data) => {
        return response.json({status : "success" , id: users.length});
    })
    
});

app.patch("/api/users/:id" , (request , response) => {
    // TODO : to edit existing user with id
    return response.json({status : "pending"});
});

app.delete("/api/users/:id" , (request , response) => {
    // TODO : to delete existing user with id
    return response.json({status : "pending"});
});

app.listen(PORT , () => {
    console.log("Server started !");
})