// Explanation

const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}

let firstName = "Dimas";
let age = 20;

// initialize new value via destructuring object
({ firstName, age } = profile);

console.log(firstName);
console.log(age);