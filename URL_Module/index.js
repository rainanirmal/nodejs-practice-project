const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((request , response) => {
    if(request.url === "/favicon.ico") return response.end();

    const log = `${Date.now()} : ${request.url} : New request received\n`;

    const myUrl = url.parse(request.url , true);
    console.log(myUrl);

    fs.appendFile('./log.txt' , log , (err , data) => {
        switch(myUrl.pathname) {
            case '/' :
                response.end(`Hello , ${myUrl.query.name}`);
                break;
            case '/about' :
                response.end("Hey there , this is Raina Nirmal !");
                break;
            case '/search' :
                response.end("Here are your results for " + myUrl.query.search_query );
                break;
            default :
                response.end("404 : Page not found");
        }
    })
});

myServer.listen(8000 , () => {
    console.log("Server started !");
})