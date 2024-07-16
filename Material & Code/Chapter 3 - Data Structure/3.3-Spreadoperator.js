const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
// Check the different beetween this :
console.log(favorites);

// And This 
console.log(...favorites);

// If you realis its same
console.log(...favorites);
console.log(favorites[0], favorites[1], favorites[2], favorites[3]);

// Using Spread data to combine
// Without spread
const favorites2 = ["Seafood", "Salad", "Nugget", "Soup"];
const others2 = ["Cake", "Pie", "Donut"];

const allFavorites2 = [favorites2, others2];

console.log(allFavorites2);

// With spread 
const favorites3 = ["Seafood", "Salad", "Nugget", "Soup"];
const others3 = ["Cake", "Pie", "Donut"];

const allFavorites3 = [...favorites3, ...others3];

console.log(allFavorites3);

// The conclusion about combining
const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };

const newObj = { ...obj1, ...obj2 };

console.log(newObj);