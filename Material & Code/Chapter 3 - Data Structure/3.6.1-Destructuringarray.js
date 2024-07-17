// Basic explanation

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

const [firstFood, secondFood, thirdFood, fourthFood] = favorites;

console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);

// Try to a piece of array

const favorites2 = ["Seafood", "Salad", "Nugget", "Soup"];

const [ , , thirdFood2 ] = favorites2;

console.log(thirdFood2);