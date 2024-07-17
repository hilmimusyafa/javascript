// Basic Explanation

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

let myFood = "Ice Cream";
let herFood = "Noodles";

[myFood, herFood] = favorites;

console.log(myFood);
console.log(herFood);

// Proofing in move value
// Without Destructuring 

var a = 1;
var b = 2;
var temp;

console.log("Before swap");
console.log("Value a: " + a);
console.log("Value b: " + b);

temp = a;
a = b;
b = temp;

console.log("After swap");
console.log("Value a: " + a);
console.log("Value b: " + b);

// With destructuring

let a = 1;
let b = 2;

console.log("Before swap");
console.log("Value of a: " + a);
console.log("Value of b: " + b);

[a, b] = [b, a] // sets the value of a to the value of b and the value of b to the value of a.

console.log("After swap");
console.log("Value of a: " + a);
console.log("Value of b: " + b);