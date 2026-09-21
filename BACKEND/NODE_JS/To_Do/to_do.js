const fs = require('fs');
const filePath = "./tasks.json";

loadTasks = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);

    } catch (error) {
        return []
    }
}




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