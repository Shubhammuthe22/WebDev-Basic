
const msg = {
    name : 'Shubham',

    greet (){
        console.log(`Hi,I am ${this.name}!`);
    },
}

msg.greet();
// -Here we are accessing the object 'greet' from the msg.

const functionName = msg.greet
// -Here we are trying to pass the reference from one variable to another
// -The reference cannot be passed/transferred directly.Hence it cannot access the value of name.
functionName();

const boundContext = msg.greet.bind({name : 'Max'});
//-To transfer the reference from one variable to another explicitly 'bind' keyword is used.
boundContext(); 