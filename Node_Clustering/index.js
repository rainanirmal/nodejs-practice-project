const cluster = require("cluster");
const os = require("os");
const express = require("express");
const totalCPU = os.availableParallelism();

if(cluster.isPrimary) {
    console.log(`Primary ${process.pid} is running !`);

    for(i = 0 ; i < totalCPU ; i ++) {
        cluster.fork();
    }


}
else {
    const app = express();
    const PORT = 8000;

    app.get("/" , (request , response) => {
        response.end(`Server running on ${process.pid}`);
    })

    app.listen(PORT , () => {
        console.log(`Server started on ${PORT} !`);
    })
}