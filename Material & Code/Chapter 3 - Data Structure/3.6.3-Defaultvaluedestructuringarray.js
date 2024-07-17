// Proof default value

const favorites = ["Seafood"];
const [myFood, herFood] = favorites

console.log(myFood);
console.log(herFood);

// You can custom defalut value, like destructuring object

const favorites2 = ["Seafood"];

const [myFood2, herFood2 = "Salad"] = favorites2

console.log(myFood2);
console.log(herFood2);