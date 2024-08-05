qWA## Chapter 4 : Function

### 4.1 Object

#### 4.1.1 What is Function?

A function is an independent block of code that performs a specific task, while a function expression is a way to store functions in variables. Still confused? See the picture below : 

![Tambahkan sedikit teks isi (4)](https://hackmd.io/_uploads/BkF_l3st0.png)

For example, in the image above, the function created is a function for purchasing goods, where each time it is run with input variables, it will reduce the variable by 25, so the output becomes 75 because 100 - 25 = 75.

To know more, below is the function that has been converted into a JavaScript version:
```javascript
purchase(money) {
    return money - 25;
}
```
Here's the explanation : 

![Tambahkan sedikit teks isi (5)](https://hackmd.io/_uploads/BkTd9njt0.png)

1. Name of Function : Of course function need name. So, when we want to use a function, we just call it using the function name.
2. Function Parameter : Functions can accept input in the form of parameters. When a function is called, the values given to the parameters are called arguments. In some case, can be used without input or parameter, it will only output when called it.
3. Action code : Last thing of course the action code, what the function does when it is called, you can write anything you want with that function.
> ***return** in programming means the end of the function action, meaning if there is code or action after the return, that action will not be executed, also in some case function did not use return but it may another output way (like console.log).*

You can try about function in [4.1.1-Basicoffunction.js](https://github1s.com/hilmimusyafa/javascript/blob/main/Chapter%204%20-%20Function/4.1.1-Basicoffunction.js)

#### 4.1.2 Parameter & Argument

In this session, will be repeat about parameter & argument. In functions, parameters and arguments are often confused.

The basic differences between the two include:

1. Parameters : variables that are defined as input to a function. Example : 
```javascript
function multiply(a, b) {
    return a * b;
}
```
2. Arguments : values or expressions that are entered into the function. For example:
```javascript
multiply(3, 4);
```
You can call a function by writing its name followed by parentheses and arguments, if any :
```javascript
function greeting() { //() parameter
    console.log("Good Morning!")
}

greeting(); //greeting is arguments
```
Output : 
```
Good Morning!
```
Here more example about function : 

```javascript
let user = "caelus";
let targetTalk = "march7th";

function talk(user, targetTalk) {
    if (user == "caelus") {
        if (targetTalk == "march7th") { 
            return "Hey March, do you want to go to the library with me?";
        } else if (targetTalk == "dan heng") {
            return "Do you want to help me in the library?";
        }
    } else if (user == "March7th") {
        if (targetTalk == "caelus") {
            return "Caelus, can you help me please in the library?";
        } else if (targetTalk == "dan heng") {
            return "Dan Heng, help me please";
        }
    }
}

console.log(talk(user, targetTalk));
```
Output : 
```
Hey March, do you want to go to the library with me?
```
You can put if/ else, loop or anything else in function also now you can what is parameter and argument.

For learn more about Parameter & Argument, you can open code in [4.1.2-Parameter&argument.js](https://github1s.com/hilmimusyafa/javascript/blob/main/Chapter%204%20-%20Function/4.1.2-Parameter%26argument.js)

#### 4.1.3 Expression Function

Another way to create a function in JavaScript is using function expressions. These functions can be stored in a variable and are often anonymous (unnamed) :

```javascript
const talk = function(user, targetTalk) {
    if (user == "caelus") {
        if (targetTalk == "march7th") { 
            return "Hey March, do you want to go to the library with me?";
        } else if (targetTalk == "dan heng") {
            return "Do you want to help me in the library?";
        }
    } else if (user == "March7th") {
        if (targetTalk == "caelus") {
            return "Caelus, can you help me please in the library?";
        } else if (targetTalk == "dan heng") {
            return "Dan Heng, help me please";
        }
    }
}

console.log(talk("caelus", "marc7th"));
```
Output : 
```
Hey March, do you want to go to the library with me?
```

Explore more about Expression Function in [4.1.3-ExpressionFunction.js](https://github1s.com/hilmimusyafa/javascript/blob/main/Chapter%204%20-%20Function/4.1.3-ExpressionFunction.js)

### 4.2 Function Parameter

#### 4.2.1 Back to Function Parameter

Just repeating for understanding, Functions can accept input in the form of parameters. When a function is called, the values given to the parameters are called arguments. In some case, can be used without input or parameter, it will only output when called it.

The basic differences between the two include:

1. Parameters are variables that are defined as input to a function. Example : 

```javascript
function multiply(a, b) {
    return a * b;
}
```

2. Arguments are values or expressions that are entered into the function. For example : 
```javascript
multiply(3, 4);
```

The parameters of a function can be any data type, ranging from strings, numbers, objects, even other functions.

If the parameter of the function is an object, destructuring is allowed. Examples are as follows :

```javascript
const user = {
    id: 10129,
    displayName: 'LittleGuiGuinevere',
    fullName: 'Guinaifen',
};

function introduce({displayName, fullName}) {
    console.log(`Username ${displayName} is ${fullName}`);
}

introduce(user);
```
Output : 
```
Username LittleGuiGuinevere is Guinaifen
```

You can back to explore more about Function Parameter in [4.2.1-Functionparameter.js](https://github1s.com/hilmimusyafa/javascript/blob/main/Chapter%204%20-%20Function/4.2.1-Functionparameter.js)

#### 4.2.2 Default Parameter

Functions in JavaScript do not check the number or type of arguments entered into the parameters. It will automatically put undefined value :

```javascript
function exponentsFormula(baseNumber, exponent) {
    const result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(2);
```
Output : 
```
2^undefined = NaN
```
Because only one number is input while there are two parameters then one immediately becomes undefined. But you can specify the default value :
```javascript
function exponentsFormula(baseNumber, exponent = 2) {
    const result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(2);
```
Output : 
```
2^2 = 4
```

Knowing more about Default Parameter in [4.2.2-Defaultparameter.js](https://github1s.com/hilmimusyafa/javascript/blob/main/Chapter%204%20-%20Function/4.2.2-Defaultparameter.js)

#### 4.2.3 Rest Parameter

In JavaScript also can use spread operator as parameter, it will automatically use as many of number member.

An example is a function that adds up all argument values as follows : 
```javascript
function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

console.log(sum(1, 2, 3, 4, 5));
```
Output : 
```
15
```

More about Rest Parameter in [4.2.3-Restparameter.js](https://github1s.com/hilmimusyafa/javascript/blob/main/Chapter%204%20-%20Function/4.2.3-Restparameter.js)

### 4.3 Arrow Function

In ES6 introduce a new way to use function, the name is arrow function, it is same like regular function but it make more easy and fun :

- Regular Function

```javascript
function add(a, b) {
    return a + b;
}
```
-  Arrow Function

```javascript
// function expression
const add = (a, b) => a + b;
```
In the arrow function, we don't need to write the function keyword every time we create a function. We still write parameters in brackets followed by an arrow (=>) before the curly braces.
```javascript
const sayName = (name) => {
    console.log(`My name is ${name}`)
}
```
Here some Example : 
1. No Parameters
```javascript
const greet = () => console.log("Hello, Caelus!");
greet();
```
Output : 
```
Hello, Caelus!
```
2. Single Parameter
For a single parameter, parentheses around the parameter can be omitted :
```javascript
const square = x => x * x;
console.log(square(5));
```
Output : 
```
25
```
3. Multiple Parameters
```javascript
const multiply = (a, b) => a * b;
console.log(multiply(4, 3)); 
```
Output: 
```
12
```

4. Returning Objects
To return an object, wrap the object literal in parentheses :
```javascript
const createPerson = (name, age) => ({ name, age });
console.log(createPerson("Alice", 30)); 
```
Output: 
```
{ name: "Alice", age: 30 }
```
5. Arrow Functions and "this"
Arrow functions do not have their own this context; they inherit it from the parent scope :
```javascript
function Person() {
    this.age = 0;

    setInterval(() => {
        this.age++;
        console.log(this.age);
    }, 1000);
}

const p = new Person(); 
```
Output: 
```
1, 2, 3, ...
```

You can explore more about Arrow Function [4.3-Arrowfunction.js](https://github1s.com/hilmimusyafa/javascript/blob/main/Chapter%204%20-%20Function/4.3-Arrowfunction.js)

### 4.4 Variable Scope

In this material, is just identifying "what is type of variable?".

There are 2, namely. "globally scoped" and "locally scoped", for "globally scoped" is a variable/constant that can be used everywhere in the program, in functions, etc. "Locally scoped" is a variable/constant that is only used in certain functions.

This is a direct example for variable scope : 
```javascript
// global variable, can be accessed in parent() and child()
const a = 'a';

function parent() {
    // local variable, can be accessed in parent() and child(), but cannot be accessed outside the function.
    const b = 'b';

    function child() {
         // local variable, accessible only in the child() function.
        const c = 'c';
    }
}
```
In Programming, need to focus about code, to see the variable it will use globally or locally/  for example the following  : 

```javascript
function multiply(num) {
    total = num * num;
    return total;
}

let total = 9;
let number  = multiply(20);

console.log(total)
```
Output : 
```
400
```
You can learn about Variable Scope in [4.4-Variablescope.js](https://github1s.com/hilmimusyafa/javascript/blob/main/Chapter%204%20-%20Function/4.4-Variablescope.js)

### 4.5 Closure

Closure occurs when a function "locks" a variable from its outer scope. This allows the function to "remember" the variable even though the outer scope is no longer active.

Closure is one of the important concepts in JavaScript that allows a function to access variables from its outer scope even after that scope has finished executing. This is very useful in many programming scenarios, especially in data management and developing more modular and flexible functions.
```javascript
function outerFunction() { 
    let outerVariable = "I am from the outer scope!";

    function innerFunction() { 
        console.log(outerVariable); // Access variables from outerFunction 
    }
    return innerFunction;
}

const closureExample = outerFunction();
closureExample();
```
Output : 
```
I am from the outer scope!
```
In the example above, innerFunction can access outerVariable even though outerFunction has finished executing. This happens because innerFunction forms a closure that locks outerVariable.

Uses of Closure
1. Encapsulation and Data Privacy
Closures allow us to create variables and functions that can only be accessed from within a particular function, which helps in maintaining data privacy and preventing contamination of global variables.
```javascript
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
```
Output : 
```
1
```
2. Creating Functions with Flexible Settings
Closures allow us to create functions with flexible and configurable settings.
```javascript
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
console.log(double(5));

const triple = createMultiplier(3);
console.log(triple(5));
```
```
10
15
```
3. Callback Functions and Asynchronous Programming
Closures are very useful in handling callbacks and asynchronous programming such as setTimeout or fetch.
```javascript
function delayedGreeting(name) { 
    setTimeout(function() { 
        console.log(`Hello, ${name}!`); 
    }, 1000);
} 

delayedGreeting("Alice");
```
Output : 
```
Hello, Alice! (after 1 second)
```
4. State Management in Web Applications
Closures can be used to manage state in web applications, especially in developing components that can hold state internally.
```javascript
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
```
Output : 
```
1
2
1
```

Closure is a very important concept in JavaScript because it provides flexibility and power in managing data and functions. By understanding and using closures, we can write code that is more modular, safe, and easy to maintain.

Learn more about Closure in [4.5-Closure.js](https://github1s.com/hilmimusyafa/javascript/blob/main/Chapter%204%20-%20Function/4.5-Closure.js)
