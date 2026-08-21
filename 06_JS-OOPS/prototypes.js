let computer = { Ram: 12};
let lenovo = {
    display: 'HD',
    __proto__:computer};
    // By doing this we can access the values of another object,
    // instead of repeting it. 
let newCompany = {};

console.log (computer.__proto__);
// whenever we try to access the object using 'Dunder'[underscore-underscore(__proto__)]prototype,
//  it doesnt return anything because it is just the default created function.
// But untill if we 'override' it or inject anything into it.

console.log(`lenovo`,lenovo.__proto__);
console.log(`lenovo`,lenovo);

// Ex.2
let car = {tyres: 4 };
let tesla ={
    driver: "AI"
};
Object.setPrototypeOf(tesla,car);
console.log(`tesla`,Object.getPrototypeOf(tesla));
// Instead of using the 'dunder' property,we can use the 
// 'getPrototypeof()' for accessing the values of other objects.

// hasOwnProperty indicates wheteher the object has its own property,
//  or has inherited from someone
