
document.addEventListener("DOMContentLoaded", () =>{
    const toDOInput = document.getElementById("to-do-input");
const toDoList = document.getElementById("to-do-list");
const addTask = document.getElementById("add-task");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
// JSON.parse it is used to convert the string type data to its original form.

tasks.forEach((task) => renderTask(task));

addTask.addEventListener('click' , () => {
    const taskText = toDOInput.value.trim();
    // trim() is used to cut the extra space id added at the end
    if(taskText === "") return;
    
    const newTask = {
        id:Date.now(),
        value: taskText,
        status : false

    }
    tasks.push(newTask);
    saveTask();

    toDOInput.value = ""; //clear input value.
    console.log(tasks);
    });

    function renderTask (task){
        //renderTask(task) should be responsible for displaying a task on the webpage.
        //renderTask() should render/display the task in HTML.
        //It is also used to loop through the array for each task,
        //  and call the method each time for each task.
        console.log(task);
        
    }
    
    function saveTask (){
        localStorage.setItem("tasks", JSON.stringify(tasks));
        // localStorage stores the values in the form of a key-value pair.
        // Here Json.stringify is used to convert the values of any type into the strings.
    }



});
