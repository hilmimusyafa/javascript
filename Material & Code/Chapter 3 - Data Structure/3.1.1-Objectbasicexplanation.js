// Basic definition

let object = {key1: "value1", key2: "value2", key3: "value3"}

// Simple example

const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
};
console.log(`Hello, my name is ${user.firstName} ${user.lastName}`);
console.log(`My age is ${user.age} years`);

// Square brackets

const user2 = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
    "home world": "Tattooine"
};

console.log(`Hello, my name is ${user2.firstName} ${user2.lastName}`);
console.log(`My age is ${user2.age} years`);
console.log(`I come from ${user2["home world"]}`);

// Sandbox
