// Example

function init() {
    const name = 'Obi Wan'; // Local variable within the scope of the init function

    function greet() { // Inner function, is an example of a closure
        console.log(`Hello, ${name}`); // Calls the variable declared in the parent function
    }

    greet();
}

init();

// More example 

function init() {
    const name = 'Obi Wan';

    function greet() {
        console.log(`Hello, ${name}`);
        }
    return greet;
}

const myFunction = init();
myFunction();

// its same

let counter = 0;

const add = () => {
    return ++counter;
}

console.log(add());
console.log(add());
counter = 23;
console.log(add());

// Again

const add2 = () => {
    let counter = 0;
        return () => {
            return ++counter;
    };
}

const addCounter = add2();

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());