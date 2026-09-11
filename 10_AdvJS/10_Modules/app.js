// Module Import file:-
// Modules:-
// -Modules are used to split the code into smaller parts and files, and to import and export the functions,
// variables or any part of the program, from one file to another.  


// default import
import multiply from "./mathOperationsM.js";

// named import
import { add, substract } from "./mathOperationsM.js";

console.log(multiply(2,2));
console.log(add (3,4));

