// 1. Modifying using Shift & Unshift

let movie = ["Big Hero 6", 9.7, true, "Cartoon"];

movie.shift();
console.log(movie);

movie.unshift("UP");
console.log(movie);

// 2. Add Data to Last Index in Array

let movie2 = ["Big Hero 6", 9.7, true, "Cartoon"];

movie2.push('Disney');
console.log(movie2);

// 3. Remove Last Index Array Data

let movie3 = ["Big Hero 6", 9.7, true, "Cartoon"];

movie3.pop();
console.log(movie3);

// 4. Delete Data Array Based on Index 

// Delete non splice()

let movie41 = ["Big Hero 6", 9.7, true, "Cartoon"];

delete movie41[1];
console.log(movie41);

// Delete wirh splice

let movie42 = ["Big Hero 6", 9.7, true, "Cartoon"];

movie42.splice(1, 1); // Removes 1 element from index 1
console.log(movie42);

// splice add element

let movie43 = ["Big Hero 6", 9.7, true, "Cartoon"];
console.log('before splice: ', movie43);

movie43.splice(1, 0, 2017);
console.log('after splice: ', movie43);

