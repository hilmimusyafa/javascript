// Definition of Map

const myMap = new Map();

// Basic useage of Map

const myMap2 = new Map([
    ['1', 'a String key'],
    [1, 'a number key'],
    [true, true]
]);

console.log(myMap2)

// More example

const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["Berlin", "Germany"],
    ["Tokyo", "Japan"]
]);

// Before add
console.log(capital.size);
console.log(capital.get("Tokyo"));

// After add
capital.set("Paris", "France");
console.log(capital.size);
console.log(capital.get("Paris"));