// 1. Modify Properties Object
// Modify objects

const user = {
    firstName: "Bronya", 
    lastName: "Rand",
    idUser : 10009, 
    fullAcess: true, 
    location: "Central Belobog"
};

user.lastUpdate = "10/9/2024";
console.log(spaceship);

// Proof error 

const user = {
    firstName: "Bronya", 
    lastName: "Rand",
    idUser : 10009, 
    fullAcess: true, 
    location: "Central Belobog"
};

user = { lastUpdate : "10/9/2024" }; // Error

// 2. Delete Properties on Object

let user = {
    firstName: "Bronya", 
    lastName: "Rand",
    idUser : 10009, 
    fullAcess: true, 
    location: "Central Belobog",
};

delete user.location;

console.log(user);