// Basic Explanation

const numberSet = new Set([1, 4, 6, 4, 1]);

console.log(numberSet);

// Proof 

const numberSet2= new Set([1, 4, 6, 4, 1]);
numberSet2.add(5);
numberSet2.add(10);
numberSet2.add(6);

console.log(numberSet2);

// Delete

const numberSet3 = new Set([1, 4, 6, 4, 1]);
numberSet3.add(5);
numberSet3.add(10);
numberSet3.add(6);

numberSet3.delete(4);

console.log(numberSet3);