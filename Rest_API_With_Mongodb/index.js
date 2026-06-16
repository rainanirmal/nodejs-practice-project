const express = require("express");

const app = express();

app.get('/' , (request , response) => {
    response.end("Hello ! Testing ..");
})

app.listen(8000 , () => {
    console.log("Server started !");
})