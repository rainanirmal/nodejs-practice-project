const http = require("http");

const myServer = http.createServer((request , response) => {
    response.end("Hello from server");
});

myServer.listen(8000 , () => {
    console.log("Server started !");
})