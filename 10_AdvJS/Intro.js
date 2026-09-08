
console.log("Hello from Asynchronous");

function Intro() {
    console.log(`This is the function Part`);
}

for (let index = 0; index < 10; index++) {
    console.log(index);
    
}  

setTimeout(() => {
    Intro();
}, 3000);

// -Execution of the code is not sequential in the above example.
// -This nature or the property of the is called Asynchronous nature.