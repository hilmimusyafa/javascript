// Try with this 
const astralExpress = ["Himeko", "Welt ", "Dan Heng", "March7th", "Caelus"];
let visitor = ["Asta", "Herta", "Arlan", "Ruan Mei"]

// Output as usual
console.log("Without spread :")
console.log(astralExpress, visitor)

// With Spread
console.log("With spread :")
console.log(...astralExpress, ...visitor)

// If you realis its same
console.log(astralExpress, visitor)
console.log(astralExpress[0], astralExpress[1], astralExpress[2], astralExpress[3]); // Until done

// With object 

const user = { name: 'Himeko', age: 30 };
const obj2 = { gender: 'F', from: 'Astral Express' };

const newObj = { ...obj1, ...obj2 };

console.log(newObj);

