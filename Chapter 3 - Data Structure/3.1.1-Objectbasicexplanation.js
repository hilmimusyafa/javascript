// Basic definition

let object = {key1: "value1", key2: "value2", key3: "value3"}

// Simple example

let user = {
    firstName: "Bronya", 
    lastName: "Rand",
    idUser : 10009, 
    fullAcess: true, 
    location: "Central Belobog"
};

console.log(`Hello, my name is ${user.firstName} ${user.lastName}`);

// Square brackets

let user2 = {
    firstName: "Bronya", 
    lastName: "Rand",
    idUser : 10009, 
    fullAcess: true, 
    location: "Central Belobog",
    "Division Work": "Leader"
};

console.log(`Hello, my name is ${user2.firstName} ${user2.lastName}`);
console.log(`I work in ${user2["Division Work"]} division`);
