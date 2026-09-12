function Person (name){
    this.name = name;
}

Person.prototype.greet = function () {
    console.log(`Hello from ${this.name}!`);
    
}
// The ability of injecting anything into the function can be known as prototypal inheritance.
// Becoz of Prototypal inheritance objects can inherit the properties from the objects.


let msg = new Person("Shubham");
msg.greet();