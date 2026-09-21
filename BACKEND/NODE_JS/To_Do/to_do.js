const fs = require('fs');
const filePath = "./tasks.json";

//flow of project-
// grab the task(i/p)--> add the task to array --> save the task 


const loadTasks = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        //dataBuffer's data is in the complex form which cannot be understand easily,
        // Hence it is required to be converted in the string format.

        const dataJSON = dataBuffer.toString();
        // Example of raw JSON data
        //"{\"name\":\"Alex\",\"age\":25,\"isDeveloper\":true}"

        return JSON.parse(dataJSON);

    } catch (error) {
        return []
    }
}

saveTask = (tasks) => {
    const dataJSON = JSON.stringify(tasks);
    fs.writeFileSync(filePath , dataJSON);
}

const addTask = (task) => {
    const tasks = loadTasks();
    tasks.push({task});
    saveTask(tasks);
    console.log("Task Added :" , task);
    
} 

const listTask = () => {
    const tasks = loadTasks();
    tasks.forEach((task , index) => {
        console.log(`${index + 1} : ${task.task}` );
        
    });
}

const removeTask = (argument) => {
    const tasks = loadTasks();
    const index = argument - 1;

    if(index >= 0 && index < tasks.length){
        tasks.splice(index , 1);
        //This method removes 1 value at aprticular index.
        console.log(`Task No ${index} removed`);
        
        saveTask(tasks);
    }
    else{
        console.log("Invalid Task Number");
        
    }
}

const command = process.argv[2];
const argument = process.argv[3]; // These both are used to access the value store in an array,
                                // which are passed at the command line.

if(command === 'add'){
    addTask(argument)
}
else if(command === 'list'){
    listTask();
}
else if(command === 'remove'){
    removeTask(parseInt(argument))
}
else{
    console.log("Cannot find the command");
    
}