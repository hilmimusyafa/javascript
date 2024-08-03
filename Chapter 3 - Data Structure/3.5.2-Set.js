// Basic Explanation

const num = new Set([1, 5, 8, 5, 1]);

console.log(num);

// Proof 

const num2= new Set([1, 4, 6, 4, 1]);
num2.add(5);
num2.add(10);
num2.add(6);

console.log(num2);

// Delete

const num3 = new Set([1, 4, 6, 4, 1]);
num3.add(5);
num3.add(10);
num3.add(6);

num3.delete(4);

console.log(num3);