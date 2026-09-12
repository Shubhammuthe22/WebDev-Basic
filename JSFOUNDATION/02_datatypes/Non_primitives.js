const username = {
    firstname : "Shubham",
    Lastname: "Muthe",
    isLoggedin : true
};
username.Lastname = "Engineer";
//Values in the object can be modified from anywhere in the program.
//It doesnt care for const keyword too.
//'const' keyword only reserves the memory space for the object.

console.log(username);
console.log(username.firstname);
console.log(username.Lastname);

//Array:-
let heroes = ["ironman","Thor","Antman",10,true];
//Arrays can store different types of data simultaneously.
//First value must be string or number in array not boolean.

console.log(heroes[2]);

//Conversions:
console.log(true + 1);
//Js converts datatypes dynamically acoording to its best possible use case.

async (num) => {
    let{num}=Math.random()    
}