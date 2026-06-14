const http = require("http");
const fs = require("fs");

const myServer = http.createServer((request , response) => {
    const log = `${Date.now()} : ${request.url} : New request received\n`;
    fs.appendFile('./log.txt' , log , (err , data) => {
        switch(request.url) {
            case '/' :
                response.end("Hello from server");
                break;
            case '/about' :
                response.end("Hey there , this is Raina Nirmal !");
                break;
            default :
                response.end("404 : Page not found");
        }
    })
});

myServer.listen(8000 , () => {
    console.log("Server started !");
})