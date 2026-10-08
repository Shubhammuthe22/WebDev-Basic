import dotenv from "dotenv"

dotenv.config({
    path : "./.env",
});

let myusername = process.env.username;
console.log(myusername);

console.log((process.env.database));




console.log("Start of the Backend Mega poject");
//If we want to use import statement then use the modulejs
//and if want to use require syntax use the commonjs