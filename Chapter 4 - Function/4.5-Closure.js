// Example

function outerFunction() { 
    let outerVariable = "I am from the outer scope!";

    function innerFunction() { 
        console.log(outerVariable); // Access variables from outerFunction 
    }
    return innerFunction;
}

const closureExample = outerFunction();
closureExample();

// 1. Encapsulation and Data Privacy

function counter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const increment = counter();
console.log(increment());
console.log(increment());

// 2. Creating Functions with Flexible Settings

function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
console.log(double(5));

const triple = createMultiplier(3);
console.log(triple(5));

// 3. Callback Functions and Asynchronous Programming

function delayedGreeting(name) { 
    setTimeout(function() { 
        console.log(`Hello, ${name}!`); 
    }, 1000);
} 

delayedGreeting("Alice");

// 4 . State Management in Web Applications

function createComponent() {
    let state = 0;

    return {
        increment: function() {
            state++;
            console.log(state);
        },
        decrement: function() {
            state--;
            console.log(state);
        }
    };
}

const myComponent = createComponent();
myComponent.increment();
myComponent.increment();
myComponent.decrement();