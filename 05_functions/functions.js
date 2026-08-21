// Example of creating a function;

function teaOrder(typeOfTea) {
    // The 'typeOfTea' is just a placeholder known as 'parameter'.
    // Parameter accepts the value of any type whenever a function is called.
    
    return `Making ${typeOfTea}!`;
    // Once the 'return' is triggered no piece of code inside the function gets executed.
    console.log("Hello ChaiWorld");
}

let greet = teaOrder("lemon Tea")
// 'Lemon Tea' here is the 'argument' that we are passing to the function.
// console.log(greet);˝

// Ex.2:-
function OrderTea (typeOfChai){
    function ConfirmOrder() {
        return `Order Confirmed for Chai! `;   
    }
    return ConfirmOrder();
}
let OrderStatus = OrderTea("Black Tea");
console.log(OrderStatus);

// *Arrow Function:-
const CalculateTotal = (price,quantity) => price*quantity;
// Arrow function do not require any 'return to return the output.
// It uses the implicit Return and parenthesis{}.


let totalCost = CalculateTotal(89,100);
console.log(totalCost);