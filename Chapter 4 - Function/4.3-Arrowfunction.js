// Different beetween Regular Function & Arrow Function
// Regular Function

function add(a, b) {
    return a + b;
}

// Arrow function

const add2 = (a, b) => a + b;

// Here some example 
// 1. No Parameters

const greet = () => console.log("Hello, Caelus!");
greet();

// 2. Single Paramaeter

const square = x => x * x;
console.log(square(5));

// 3. Multiple Parameters

const multiply = (a, b) => a * b;
console.log(multiply(4, 3)); 

// 4. Returning Objects

const createPerson = (name, age) => ({ name, age });
console.log(createPerson("Alice", 30)); 

// 5. Arrow Functions

function Person() {
    this.age = 0;

    setInterval(() => {
        this.age++;
        console.log(this.age);
    }, 1000);
}

const p = new Person(); 