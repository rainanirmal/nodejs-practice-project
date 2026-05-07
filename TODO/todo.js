const fs = require("fs");
const filePath = "./tasks.json";

const loadTask = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
};

const saveTask = (tasks) => {
    const dataJSON = JSON.stringify(tasks);
    fs.writeFileSync(filePath , dataJSON);
};


const command = process.argv[2];
const argument = process.argv[3];

if(command === "add") {
    addTask(task);
}
else if (command === "list") {
    listTask();
}
else if(command === "remove") {
    removeTask();
}
else {
    console.log("Command can not found");
}