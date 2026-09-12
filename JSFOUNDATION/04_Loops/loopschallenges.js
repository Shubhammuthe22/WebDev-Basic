// 1.Store the values of given array in the new array 
// and stops when the "chai" word arrrives. 
let teas =["green tea","black tea","chai","oolong tea"];
let selectTeas = [];

for (let i = 0; i < teas.length; i++) {
    if (teas[i] === "chai") {
        break;
        // break transfers the code control outside the loop;
    }
    selectTeas.push(teas[i]);
    
}
// console.log(selectTeas);

//2.for loop to store the values of array in a new array and
// skips when the "berlin" conmes.

let cities =["London","New york","Paris","Berlin","Tokyo"];
let mainCities = [];

for (let i = 0; i < cities.length; i++) {

    mainCities.push(cities[i]);

    if (cities[i] === "Berlin") { 
        mainCities.pop(cities[i]);
    }
}
// console.log(mainCities);

// * for-of Loop:-

// 3.Iterate 'for-of' loop through an array and store the value in another
// array and skip the value 'Mclaren'. 

let brands =["Bmw","Audi","Ferrari","mercedes","Mclaren"];
let newBrands = [];

// for-of is the short version of for loop which does in Bg automatically.
for (const cars of brands) { 
// ->cars is the random name given to the values in an  array
// ->brands is the name of 'object' i.e.Array through which to iterate the loop.
    
    newBrands.push(cars);
    if (cars === "Mclaren") {
        newBrands.pop(cars);
    }
}
// console.log(newBrands);

// *for-in loop:-
// 4.Use a for-in loop to loop through object containing city populations.
// Skip any one city with population less than 3 thousand.and store it in the new object.

let cityPopulation = {
    "London" : 7000,
    "New York" : 9000,
    "Berlin" : 2000,
    "Paris" : 5000,
};
// this is object.It stores the value in the form of a key-value pair.
// The access of 'object' values in not sequential as array values.
let newPopulation = {}; 

for (const city in cityPopulation) {
    if (cityPopulation[city] < 3000){
        continue;
    }
    newPopulation[city] = cityPopulation[city];
}
// console.log(newPopulation);

//  *For-Each loop:-
// 5.For-each loop that iterates through the array named cities.
// Skip the city named 'sydney' and store the other values in the another array.

let citiesName = ["Berlin","Mumbai","London","Sydney","Paris"];
let newCity =[];

// array.forEach(element => {
    // => represents the short way of defining a function.
    // We have to define a function inside a for-Each loop.
// });
citiesName.forEach(function (city) {
    if (city === "Sydney") {
        return;
    }
    newCity.push(city);
});
// console.log(newCity);

// 6.

let myNumbers = [2,5,7,9];
let newNumbers = [];

for (let i = 0; i < myNumbers.length; i++) {
    if (myNumbers[i] == '7') {
        continue;
    }
    newNumbers.push(myNumbers[i] * 2);
    
}
// console.log(newNumbers);

// 7.store the values of the given Array in the new array,
// whose string length is greater than 7.
let company = ["Mercedes","Mclaren","lamborgini","RollsRoyce","Audi","Ford"];
let Brands = [];

for (const cars of company) {
    if (cars.length < 7) {
        break;
    }
    Brands.push(cars);
}
console.log(Brands);
