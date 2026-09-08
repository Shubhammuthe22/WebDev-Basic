
function outer() {
    let counter = 2;
    return function () {
        counter++;
    }
}

let increment = outer();
console.log(increment);
