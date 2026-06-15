const express = require("express");

const app = express();

app.get('/' , (request , response) => {
    response.end("Hello !!");
})

app.get('/about' , (request , response) => {
    response.end(`Hey there , ${request.query.name}`);
})

app.listen(8000 , () => {
    console.log("Server started !");
})