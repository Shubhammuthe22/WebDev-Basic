function Person(name , age){
    this.name = name
    this.age = age
    // 'this' is a special keyword
    // this is used to store the values of 'parameters' inside a variable with the same name.
    // Also this refers to the newly created objects of a func or class. 
}

function Car(Brand , name){
    this.Brand = Brand
    this.name = name
}

let myCar =  new Car("Tata","Harrier");
// 'new' is used to create the objects,and also accesses the inside variables of a class or func.
console.log(myCar);

function Tea (type){
    this.type = type;
    this.describe = function (){
        return `Current Tea is ${this.type}`;
    };
}
let blackTea = new Tea("Black Tea");
// console.log(blackTea.describe());

function Animal (species){
    this.species = species;
    this.sound = function (){
        return `${this.species} makes a sound`;
    };
}
let dog = new Animal("Dog");
console.log(dog.sound()); 

let Cat = new Animal("Cat");
console.log(Cat.sound()); 

function Drink(name) {
    this.name = name;
    if (!new.target) {
        throw new Error("Drink must contain the new keyword");
        // 'throw' is used to give the error if the give condition is violated.
        
    };
}
// let tea = Drink("tea");
// console.log(tea);



