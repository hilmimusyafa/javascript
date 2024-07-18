// Here a different of function and non function
// Some Variable

let a = 10;
let b = 5;
let c = 9;
let d = 8;

// Non Function

x = a + b;

// In not Function, if you want to repeat plus like in x u must repat code again
y = c + d;

console.log(x);
console.log(y);
// Function

function plus(a,b) {
    return a + b
}

// If you make function you can repeat plus operation just re command the function
console.log(plus(a, b))
console.log(plus(c, d))

// or can like this :

x = plus(a, b);
y = plus(c, d);

console.log(x)
console.log(y)