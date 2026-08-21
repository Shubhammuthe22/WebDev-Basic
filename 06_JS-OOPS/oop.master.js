// Protype and Prototypal chain:-
 
function modernCar (brand,name){
    this.brand = brand;
    this.name = name;
}
// Attach the method to the prototype so all instances share one copy in memory.
modernCar.prototype.displayInfo = function(){
    return `${this.brand} owns the car ${this.name}`;
}

let newCar = new modernCar("Toyota","Camry");
// console.log(newCar.displayInfo());

// Oops concepts:-

class Vehicle {
    constructor (Brand,name){
        // constructor is the special type of method.
        this.Brand = Brand;
        this.name = name;
    }
    // feature is a method of a class.
    // Method is just a function inside class without the 'function' keyword.
    start(){
        return `${this.Brand} owns the car ${this.name}`;
    }
}

// Inheritance:-
// It is used to borrow the properties or the methods from another class.
class Car extends Vehicle{
    drive(){
        return `This is an example of Inheritance`;
    }
}

let myCar = new Car("Toyota","Hilux");
// console.log(myCar.start());
// console.log(myCar.drive());


// Encapsulation:-

class BankAccount{
    #balance = 0;
    // '#' hash symbol is used to make the variable private.
    deposit(amount){
        this.#balance += amount;
        return`${this.#balance}`;
        
    }
    getBalance(){
        return `Current Balance: ${this.#balance}`;
    }
}
let BankBalance = new BankAccount();
// console.log(BankAccount.#balance);
// #balance cannot be accessed at this place at it is outside the main class.
console.log(BankBalance.deposit(2000));

// Abstraction:-
class CoffeeMachine{
    start(){
        // filter
        // processing
        return `Starting the Machine...`;
    }
    Ready(){
        // Completion
        // Algorithms
        return `Your Coffe is Ready..`;
    }
    Process(){
        let op1 = this.start();
        let op2 = this.Ready();
        return `${op1} \n ${op2}`;
    }
    }
let status = new CoffeeMachine();  //Creating the object of class.
console.log(status.Process());
// Here just by printing the Process() method we are getting the info.
// No need of getting into the background Methods and data.
// This is the Example of Abstraction.
