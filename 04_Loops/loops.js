// Challlenges of loops in JS:-
// 1.Addition of number from 1 to 5.

let sum = 0; //We can just declare variable but sometimes it takes the random value
let i = 1;

while (i<=5) {
    sum = sum + i;
    // sum += i; 
    i++;
}
// console.log(sum);

//2. Numbers from 5 to 1 in an arry named countdown
let countdown = [];
let j = 5;

while (j>=1) {
    countdown.push(j);
    j--;
}
console.log(countdown);

// 3.Write a coollection of F1 car brands and store it in the array named Collection
// until the "stop" is entered.

// let Collection = [];
// let Cars;

// do {
//     Cars = prompt(`Enter the brand name of F1 Cars (type "stop" to finish)`);
//     if (Cars!= "stop") {
//         Collection.push(Cars);
//     }
// } while (Cars != "stop");
// console.log(Collection);

// 4.Multiply all the numbers of an array by 2 and store it in a new array.

let newArray = [];
let Numbers = [2,4,6];

for (let l = 0; l < Numbers.length; l++) {
    
    newArray.push( Numbers[l]*2);
    
}
console.log(newArray);

// 5.For loop that lists all cities in an array and store it in a new Array.

let cityList = [];
let cities = ["Paris","New york","Tokyo","London"]

for (let k = 0; k < cities.length; k++) {
    console.log(cities[k]);
    cityList.push(cities[k]);
    // cityList.shift(cities[k]); 
    // cityList.unshift(cities[k]);
    
}
console.log(cityList); 