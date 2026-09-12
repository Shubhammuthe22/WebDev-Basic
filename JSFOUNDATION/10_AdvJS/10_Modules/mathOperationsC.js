// Common js:
// this is another method of importing nad exporting modules.

function add (a,b){
    return a+b;
}
function substract (a,b){
    return a-b;
}
function multiply (a,b){
    return a*b;
}

module.exports ={
    add,
    substract,
    multiply
}