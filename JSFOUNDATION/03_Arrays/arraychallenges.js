// 1:Printing the first element of array and declaring it to another variable: 
let teaFlavors = ["green tea","Black tea","oolong tea"];
// let teaFl = new Array("green tea","Black tea","oolong tea"); 
// Alternate method to declare an array

firstTea = teaFlavors[0];
// console.log(firstTea);
// console.log(teaFl[0]);


// 2:Adding the Value in an array.
let citiesVisited = ["Mumbai","Sydney"];
// citiesVisited[(citiesVisited.length)] = "Berlin";
// not commonly used method

citiesVisited.push("Berlin");

console.log(citiesVisited);

// 3.Creating a soft copy of an Array:
let popularTeas = ["green tea","oolong tea","chai"];

softCopyTeas = popularTeas;
//Soft copy creates exact replica of the given array.
popularTeas.pop();
// It automatically pops the last element.
console.log(popularTeas);

console.log(softCopyTeas);

// 4.creating a hard copy of array:
let topCities = ["Singapore","Tokyo","London"];

let hardCopyCities = [...topCities];
// let hardCopyCities = topCities.slice();
// alternate method to create hard copy

console.log(hardCopyCities); 

// 5.Merging of two arrays into one:
let europe = ["Paris","Rome"];
let asia = ["Tokyo","Mumbai"];

let world =[europe.concat(asia)];
console.log(world); 

// 6.Is in the list:
let cityBucketList = ["Kyoto","London","Cape town","Vancouver"];

let isLondonInList = cityBucketList.includes("London");

console.log(isLondonInList);

 