// Different beetween Regular Function & Arrow Function
// Regular Function

function sayHello(greet) {
    console.log(`${greet}!`);
}

// function expression
const sayName = function (name) {
    console.log(`My name is ${name}`)
}

// Arrow function

// function expression
const sayHello = (greet) => {
    console.log(`${greet}!`)
}

const sayName2 = (name) => {
    console.log(`My name is ${name}`)
}

// Model 1

const sayName3 = (name) => {
    console.log(`My name is ${name}`)
}

sayName3("Leia");

// Model 2

const sayName4 = name => {
    console.log(`My name is ${name}`)
}

sayName4("Leia");

// Model 3

const sayHello2 = () => {
    console.log("Good Morning Everyone!")
};

sayHello();

// Model 4

const sayName5 = name => console.log(`My name is ${name}`);
sayName("Leia");

const sayHello3 = () => console.log("Good Morning Everyone!");
sayHello();

// Model 5

const multiply = (a, b) => a * b;
console.log(multiply(3, 4));