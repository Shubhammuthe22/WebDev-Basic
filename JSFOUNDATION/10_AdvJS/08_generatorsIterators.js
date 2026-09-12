
function* GenerateNumbers (){
    yield 1;  //Yield - It is same as return in simple function
    yield 2;
    yield 3;
}
//Here yield is generator
// and next() is a iterator.

let gen = GenerateNumbers();
let GenTwo = GenerateNumbers();

console.log(gen.next().value);
// for one console log it will execute the first yield or value.
console.log(gen.next().value);
console.log(gen.next().value);

// console.log(gen.next().value);
// If we try to execute it more than its limit it shows undefind as it exceeds the boundary.
console.log(GenTwo.next().value);
