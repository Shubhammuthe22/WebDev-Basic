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

