// Basic explanation and dictionary

let a = 10;
let b = 5;
let c = "10";

console.log(a == b); //10 == 5? False
console.log(a != b); //10 != 5? True
console.log(a === c); //10 === "10"? False
console.log(a !== b); //10 !== "10"? True
console.log(a > b); // 10 > 5? True
console.log(b >= b); // 5 => 5? True
console.log(a < b); // 10 < 5? False
console.log(a <= a); // 10 <= 10? True

// Proof betwwen same and identical

const aString = '10';
const aNumber = 10

console.log(aString == aNumber) // true, because the values ​​are both 10
console.log(aString === aNumber)