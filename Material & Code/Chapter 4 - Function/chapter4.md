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

You can try about function in [4.1.1-Basicoffunction.js]()

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

For learn more about Parameter & Argument, you can open code in [4.1.2-Parameter&argument.js]()

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

Explore more about Expression Function in [4.1.3-ExpressionFunction.js]()