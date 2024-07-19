## Chapter 4 : Function

### 4.1 Object

#### 4.1.1 What is Function?

Functions are an important part of programming languages. Without realizing it, we have actually used a function in the previous code example. log() in console.log() is a function that is useful for displaying data on the console. Similar to functions in mathematics, functions in programming are also used to produce output based on certain input.

![dos_2237630624b3a891c31a184108d9a73120220613105315](https://hackmd.io/_uploads/rJSYN1BdC.png)

Functions can also be used as blocks of code or procedures that can be used repeatedly. In another sense, we can think of a function as a variable that contains a logic block. The logic block will be executed when the variable is called.

All functions have the same structure. Functions are declared with the function keyword and the function name. The function name is always followed by parenthesis without spaces, then there is a pair of curly braces which contain the logic of the function.

![dos_29e48b6b4f850e776cd871a60104328e20220613105330](https://hackmd.io/_uploads/H1NCr1S_R.png)

In functions there is usually additional data in parentheses, often called parameters. Parameters are data used in functions to be processed within them. For example, the console.log() function can accept arguments in the form of strings or other data to display to the console
 
The following is an illustration of a function structure with parameters : 
![dos_3548b95abda5f416f45035b96a91a81820220613105342](https://hackmd.io/_uploads/HkDOLyS_R.png)

You can try about function in [4.1.1-Basicoffunction.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%204%20-%20Function/4.1.1-Basicoffunction.js)

#### 4.1.2 Parameter & Argument

In functions we will encounter many terms parameters & arguments. The use of these terms is often confused, even among developers.

The basic differences between the two include:

1. Parameters are variables that are defined as input to a function. Example : 
```javascript
function multiply(a, b) {
    return a * b;
}
```
2. Arguments are values ​or expressions that are entered into the function. For example:
```javascript
multiply(3, 4);
```
After creating a function we can call it by writing the function name followed by brackets and entering the arguments in it (if any).
```javascript
function greeting() {
    console.log("Good Morning!")
}

greeting();
```
Output : 
```
Good Morning!
```
But if a function just executes the same line of code it feels less functional, right? We can create the function to accept and utilize parameters to change the behavior of the function.

To add parameters to a function, add variables inside the function parentheses. However, this variable does not require the keywords var, let, or const. We can also add more than one parameter by putting a comma between the parameter variables. For example, we will add name and language parameters to the greeting function like this : 

```javascript
function greeting(name, language) {
    if(language === "English") {
        console.log(`Good Morning ${name}!`);
    } else if (language === "French") {
        console.log(`Bonjour ${name}!`);
    } else {
        console.log(`Selamat Pagi ${name}!`);
    }
}
```
So in calling it we need to send two values as arguments : 
```javascript
function greeting(name, language) {
    if(language === "English") {
        console.log(`Good Morning ${name}!`);
    } else if (language === "French") {
        console.log(`Bonjour ${name}!`);
    } else {
        console.log(`Selamat Pagi ${name}!`);
    }
}

greeting("Harry", "French");
```
Output : 
```
Bonjour Harry!
```
One more thing, functions can produce output or return a value. With the return value, we can create a function that functions to perform mathematical calculations and we can enter the results into a variable. Examples like this : 
```javascript
function multiply(a, b) {
    return a * b;
}

let result = multiply(10, 2)
console.log(result)
```
Output : 
```
20
```
So that the function can return a value, use the keyword "return" followed by the value to be returned. The return value is not only a number, it can also be a string, boolean, object, array, or other type. This is what the "greeting()" function looks like if we change it to return a string value : 
```javascript
function greeting(name, language) {
    if(language === "English") {
        return `Good Morning ${name}!`
    } else if (language === "French") {
        return `Bonjour ${name}!`;
    } else {
        return `Selamat Pagi ${name}!`;
    }
}

let greetingMessage = greeting("Harry", "French");
console.log(greetingMessage);
```
Output : 
```
Bonjour Harry!
```

What we need to pay attention to again is that when the return statement is executed, the function will immediately stop and return a value.

For learn more about Parameter & Argument, you can open code in [4.1.2-Parameter&argument.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%204%20-%20Function/4.1.2-Parameter%26argument.js)

#### 4.1.3 Expression Function

Another way to create a function in JavaScript is an expression function. Remember again that an expression is code or an instruction that returns a value, so function expressions can be stored in a variable.

In function expressions, we generally don't need to write the name of the function. Functions that are not named are also known as anonymous functions. The following is an example of writing an expression function  : 

```javascript
const greeting = function(name, language) {
    if(language === "English") {
        return "Good Morning " + name + "!";
    } else if (language === "French") {
        return "Bonjour " + name + "!";
    } else {
        return "Selamat Pagi " + name + "!";
    }
}

console.log(greeting('Ron', 'English'));
```
Output : 
```
Good Morning Ron!
```

Explore more about Expression Function in [4.1.3-ExpressionFunction.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%204%20-%20Function/4.1.3-ExpressionFunction.js)

### 4.2 Function Parameter

#### 4.2.1 Back to Function Parameter

In the previous material, we were acquainted with functions which are blocks of code that can receive input and produce certain outputs. Input to a function is passed through parameters.

In functions we will encounter many terms parameters & arguments. The use of these terms is often confused, even among developers.

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

If the parameter of the function is an object, we can also use destructuring the object to get its value. Examples are as follows :

```javascript
const user = {
    id: 24,
    displayName: 'kren',
    fullName: 'Kylo Ren',
};

function introduce({displayName, fullName}) {
    console.log(`${displayName} is ${fullName}`);
}

introduce(user);
```
Output : 
```
kren is Kylo Ren
```

You can back to explore more about Function Parameter in [4.2.1-Functionparameter.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%204%20-%20Function/4.2.1-Functionparameter.js)

#### 4.2.2 Default Parameter

Functions in JavaScript do not check the number or type of arguments entered into the parameters. This means we can enter arguments even if they do not fit the defined parameters.

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

As we can see in the code example above, when the arguments are fewer than the parameters, the undefined parameters will have the value undefined. As a solution, if possible, we can provide default values for the parameters. This value will be used if we do not enter parameters

```javascript
function exponentsFormula(baseNumber, exponent = 2) {
    const result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(3);
```
Output : 
```
3^2 = 9
```

Knowing more about Default Parameter in [4.2.2-Defaultparameter.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%204%20-%20Function/4.2.2-Defaultparameter.js)

#### 4.2.3 Rest Parameter

Do you still remember the spread operator (...)? If the spread operator spreads an array into several different elements, the rest parameter is the inverse of that operator. Curious?

Rest parameters are also written using three consecutive dots (...). With the rest parameter, we can combine several elements into one array. Of course, this technique is very useful when we want to create a function with uncertain parameters.

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

More about Rest Parameter in [4.2.3-Restparameter.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%204%20-%20Function/4.2.3-Restparameter.js)

### 4.3 Arrow Function

ES6 introduces a new function called arrow function expression or better known as arrow function. Arrow functions are similar to regular functions in behavior, but differ in writing. As the name suggests, functions are defined using arrows or fat arrows ( => ). Of course, writing this arrow function will be shorter.

In addition to syntactic differences, there are behavioral differences between arrow functions and regular functions. Regular functions can be in the form of function declarations and function expressions. However, arrow functions are only expression functions. That's why the arrow function has the full name "arrow function expression".

- Regular Function

```javascript
function sayHello(greet) {
    console.log(`${greet}!`);
}
 
// function expression
const sayName = function (name) {
    console.log(`My name is ${name}`)
}
```
-  Arrow Function

```javascript
// function expression
const sayHello = (greet) => {
    console.log(`${greet}!`)
}
 
const sayName = (name) => {
    console.log(`My name is ${name}`)
}
```

In the arrow function, we don't need to write the function keyword every time we create a function. We still write parameters in brackets followed by an arrow (=>) before the curly braces.

```javascript
const sayName = (name) => {
    console.log(`My name is ${name}`)
}
```

If the function only has one parameter, then we can remove the brackets as follows : 

```javascript
const sayName = name => {
    console.log(`My name is ${name}`)
}

sayName("Leia");
```
Output : 
```
My name is Leia
```

However, if we don't need parameters at all, then we still write empty brackets like this : 

```javascript
const sayHello = () => {
    console.log("Good Morning Everyone!")
};

sayHello();
```
Output : 
```
Good Morning Everyone!
```

One interesting thing, when the body of the function only consists of one line, we can remove the curly braces. Of course this will save the lines of code we write.

```javascript
const sayName = name => console.log(`My name is ${name}`);
sayName("Leia");

const sayHello = () => console.log("Good Morning Everyone!");
sayHello();
```
Output : 
```
My name is Leia
Good Morning Everyone!
```

When a function needs to return a value, we no longer need to write return (only works for single-line functions).

```javascript  
const multiply = (a, b) => a * b;
console.log(multiply(3, 4));
```
Output : 
```
12
```

You can explore more about Arrow Function [4.3-Arrowfunction.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%204%20-%20Function/4.3-Arrowfunction.js)

### 4.4 Variable Scope

Previously, we learned about functions and variables or constants, which will be related to this material, where in programming there is the term variable scoping.

A scoping variable is a variable that is allocated only in a certain place, this particular place can be in the program/code, or in a certain function. or dfunction inside that function.

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
We must be careful in defining variables inside functions. The reason is, we can get unexpected results, for example the following  : 

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

Maybe we hope that the total value will remain 9, considering that the total variable in the multiply function should not have any effect on code outside of that function. This can happen because in the multiply() function we do not set the total variable as local scope. We do not use the const or let keywords when declaring the total variable in the multiply() function so that the total variable becomes global.

> *We need to pay attention, if we forget to write the let, const, or var keywords in the script when creating a variable, then the variable will become global.*

As much as possible we should avoid creating global variables, because global variables can be accessed in all the scripts we write. The more global variables we write, the higher the possibility of a collision occurring.

You can learn about Variable Scope in [4.4-Closure.js]()

### 4.5 Closure

After learning about scope in the previous material, this time we will discuss closure. Previously we knew that functions can be defined in the global scope or within other functions. A function that can access variables within its lexical scope is called a closure. Lexical scope means that in a nested function, the function inside has access to variables in its parent scope.

```javascript
function init() {
    const name = 'Obi Wan'; // Local variable within the scope of the init function

    function greet() { // Inner function, is an example of a closure
        console.log(`Hello, ${name}`); // Calls the variable declared in the parent function
    }
    greet();
}

init();
```
Output :
```
Hello, Obi Wan
```

The init() function has a local variable name and a greet() function. The greet() function is an inner function defined inside init() and can only be accessed from within the init() function. Note that the greet() function has no local variables. However, because the inner function has access to variables in its parent function, greet() can access the name variable. That is what is meant by lexical scope.

Now look at the following code example : 

```javascript
function init() {
    const name = 'Obi Wan';

    function greet() {
        console.log(`Hello, ${name}`);
        }

    return greet;
}

const myFunction = init();
myFunction();
```
Output : 
```
Hello, Obi Wan
```

The above code will produce the same output. The difference is that the greet() function is returned from the outer function before being executed. Because the name variable is in the scope of init(), generally the variable will be lost or deleted when the function is finished executing. However, in the case above, the greet() function which is accessed via the MyFunction() function still has a reference or access to the name variable. The variables in the mechanism above are closed, which means the variables are in closure.

Indeed, at the beginning it was quite difficult to understand closure. So, let's see directly what these closures are used for in a real program.

JavaScript does not have a way to declare a function or variable to be private like the Java language. So a function or variable can be accessed from anywhere. Why do we need private methods? One is to restrict access to functions or variables. Consider the following example : 

```javascript
let counter = 0;

const add = () => {
    return ++counter;
}

console.log(add());
console.log(add());
counter = 23;
console.log(add());
```
Output : 
```
1
2
24
```

The counter value will increase when we call the add() function. However, we can also change the counter value directly with the assignment operator. In more complex program examples, this should be avoided because direct changes to the counter value could introduce bugs.

Closures allow us to make functions and variables appear to be private. This is an example of a counter program created with a closure : 

```javascript
const add = () => {
    let counter = 0;
        return () => {
            return ++counter;
    };
}

const addCounter = add();

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());
```
Output : 
```
1
2
3
```

Learn more about Closure in [4.5-Closure.js]()

### 4.6 Quiz Coding : Function

To test practical skills in understanding operator logic and Function in JavaScript, let's complete the following quiz.

To do : 
```
TODO:
1. Create a minimally named function with the following conditions:
 - Accepts two number arguments, a and b.
 - Returns the smallest value between a or b.
 - If both values are the same, then return the value a.
example:
minimum(1, 4) // output: 1
minimum(3, 2) // output: 2
minimum(3, 3) // output: 3

2. Create a function called findIndex that accepts two parameters, namely array and number.
- The function must return the index of the corresponding number in the array.
- If the number is not found, then return the value -1.

example:
findIndex([1, 2, 3, 4, 5], 3) // output: 2
findIndex([1, 2, 3, 4, 5], 6) // output: -1
findIndex([1, 2, 3, 4, 5], 5) // output: 4
```
Answer Code : 
```javascript
function minimal(a, b) {
    let smaller = 0;
    if (a <= b) {
    	smaller = a
    } else {
    	smaller = b
    }
    return smaller
}

function findIndex(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            return i;
        }
    }
    return -1;
}
```
Optional Code : 
```javascript
console.log(minimum(1, 4));
console.log(minimum(3, 2));
console.log(minimum(1, 4));

console.log(findIndex([1, 2, 3, 4, 5], 3))
console.log(findIndex([1, 2, 3, 4, 5], 6))
console.log(findIndex([1, 2, 3, 4, 5], 5))
```
Output : 
```
1
2
1
2
-1
4
```

For source code you can open in [4.6-Quizcodingfunction.js]()