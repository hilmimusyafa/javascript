//  1. Basic Syntax

const astralExpress = ["Himeko", "Welt", "Dan Heng", "March7th", "Caelus"];
const [pOne, pTwo, pThree] = astralExpress;

console.log(pOne); 
console.log(pTwo); 
console.log(pThree); 

// 2. Skipping Elements

const astralExpress2 = ["Himeko", "Welt", "Dan Heng", "March7th", "Caelus"];
const [pOne2, , pThree2] = astralExpress2;

console.log(pOne2); 
console.log(pThree2); 

// 3. Default Values

const astralExpress31 = ["Himeko", "Welt"];
const [pOne31, pTwo31, pThree31] = astralExpress31;

console.log(pOne31);
console.log(pTwo31); 
console.log(pThree31); 

// Assign

const astralExpress32 = ["Himeko", "Welt"];
const [pOne32, pTwo32, pThree32 = "Empty"] = astralExpress32;

console.log(pOne32);
console.log(pTwo32); 
console.log(pThree32); 


// 4. Swapping Variable

let a = "March7th";
let b = "Caelus";
[a, b] = [b, a]

console.log(a);
console.log(b); 

// 5. Rest Opeartor

const astralExpress5 = ["Himeko", "Welt", "Dan Heng", "March7th", "Caelus"];
const [pOne5, pTwo5, ...rest5] = astralExpress5;

console.log(pOne5); 
console.log(pTwo5); 
console.log(rest5);

// 6. Nested Destructuring

const astralExpress6 = ["Himeko", "Welt", "Dan Heng", ["March7th", "Caelus"]];
const [pOne6, pTwo6, pThree6, pFour6, pFive6] = astralExpress6;

console.log(pOne6); 
console.log(pTwo6); 
console.log(pThree6); 
console.log(pFour6); 
console.log(pFive6); 