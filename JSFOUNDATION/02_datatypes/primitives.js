let name = "Shubham";

let balance = 100;
let anotherBalance = new Number(150);
// 'new' alondg with datatype creates 'object'.

console.log(typeof anotherBalance);

let username = "shubhammuthe22";
console.log(username);

let oldUser = (typeof name);
// 'typeof' is a special operator used to show the datatype of a variable.
console.log(oldUser);

let nextAge;
// if we didnt provide any value to variable it becomes undefined.
// Udefined can be use in the future reference.
let Age = typeof nextAge;
console.log(Age);

let birth = null;
console.log(typeof birth);

// string:
let myname = "Shubham";
let greet = "Hello";

let oldGreet = greet + "Shubham"; //this is old way of witing.
//this combination of small and capital is known as 'camelcase'.
console.log(oldGreet);

let newGreet = `Hello ${myname}!`; //This is new way of writing.
console.log(newGreet);