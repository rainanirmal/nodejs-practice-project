const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

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

app.post("api/users" , (request , response) => {
    // TODO : to create user
    response.json({status : pending});
});

app.patch("api/users/:id" , (request , response) => {
    // TODO : to edit existing user with id
    response.json({status : pending});
});

app.delete("api/users/:id" , (request , response) => {
    // TODO : to delete existing user with id
    response.json({status : pending});
});

app.listen(PORT , () => {
    console.log("Server started !");
})