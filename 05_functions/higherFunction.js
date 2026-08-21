// Ex.1-
function makeTea (teaType) {
    return `make tea: ${teaType}`;
}
function processTea (teaFunction){
    return teaFunction ('earl grey');
}

let order = processTea(makeTea);
// console.log(order);

// Ex.2:-

function teaMaker(){
    return function (typeofTea) {
        return `Making ${typeofTea}`;
    }
}

let status = teaMaker();
let result = status("green tea");
console.log(result);
