// Polymorphism:-

class Bird{
    fly(){
        return `Bird is flying..`;
    }
}
class Lion extends Bird{
    fly(){
        return `Lions can't fly...`;
    }
}

let LightBird = new Bird();
let Animal = new Lion();
console.log(LightBird.fly());
console.log(Animal.fly());
// Same method having mutiple uses or the forms.

// Static Method:-
class Calculator{
    static add(a,b){
        return a+b;
    }
}
let miniCalc = new Calculator();
// console.log(miniCalc.add(2,5));
// 'miniCalc' cannot access the static method.
console.log(Calculator.add(2,5));

// Getters and Setters.
// Get():- It is used to fetch the data from the variable
// Set():- It is used to restrict the access to the variable or the object.

class Employee{
    #salary;
    
    constructor(name , salary){
        if (salary < 0) {
        throw new Error("Salary cannot be negative");
        
    } 
        this.name = name;
        this.#salary = salary;
        // '_' in front of the salary is just used to indicate that the some special methods are coming.
    }
    get salary(){
        return `You are not allowed to see the salary`;
    }
    set salary(value){
        if (salary < 0) {
            console.error("Invalid Salary");
        } 
        else {
            this._salary = value;
        }
    }

}
let emp = new Employee("Alice",-50000);
console.log(emp._salary);

console.log(emp.salary);
// get and set method puts the access restriction here. 