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
})

app.listen(PORT , () => {
    console.log("Server started !");
})