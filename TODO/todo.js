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

const addTask = (task) => {
    const tasks = loadTask();
    tasks.push({task});
    saveTask(tasks);
    console.log("Task added : " , task);
}

const listTask = () => {
    const tasks = loadTask();
    tasks.forEach((task , index) => console.log(`${index + 1} - ${task.task}`));
}

const removeTask = (argu) => {
    const tasks = loadTask();
    const updateTask = tasks.filter((task , index) => {
        return index !== argu - 1;
    });
    saveTask(updateTask);
    console.log("Task Deleted");
}

const command = process.argv[2];
const argument = process.argv[3];

if(command === "add") {
    addTask(argument);
}
else if (command === "list") {
    listTask();
}
else if(command === "remove") {
    removeTask(parseInt(argument));
}
else {
    console.log("Command can not found");
}