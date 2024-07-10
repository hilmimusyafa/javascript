## Chapter 2 : Javascript Fundamental

### 2.1 Write Your First JavaScript Code

Writing code in a programming language simply means writing instructions for a computer to execute. The code below is an instruction for the terminal or console to log the sentence "Hello, World!".

```javascript
console.log("Hello World!");
console.log("Hilmi Musyafa");
```
Output : 
```
Hello World!
```

> *console.log is the default JavaScript code to display messages to the console, which can be a web console or a console from a terminal/command prompt.*
> 
> *"" means string data type*

You can run code [2.1-Writeyourcode.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20Javascript%20Fundamental/2.1-Writeyourcode.JS) to learn more about the code

JavaScript divides instructions generally into two types, namely expressions and statements.

- An expression is a unit of code that can be evaluated to a value. To make it easier, look at the following code example:

```javascript
5; // This line of code is an expression because the interpreter will read this code and produce the value 5.
2 + 3; // This line of code is also an expression. The interpreter evaluates the code and will also return a value of 5.
```

- Meanwhile, a statement is an instruction to carry out a certain action. These actions can include creating variables, looping, checking conditions, etc.

```javascript
var yourName;
let yourAge;
const numberOfDays; // declaration statement
```
> *Need to remember is:
> Expression is code that produces values. Statement shows the action taken.*

### 2.2 Comments

Comments are instructions that tell the computer to ignore the commands we write. Instructions written in a program but not executed by the computer are called “comments”.

A comment will be missed by the interpreter or compiler, so it will not affect the flow of the program we write. These comments can be used as documentation or explanation of the code we write.

There are two methods for providing comments. First, to comment on just one line, we can use two slashes (//) at the beginning of the line.

```javascript
console.log("Hello World!")
//console.log("Sigma!")
```
Output : 
```
Hello World!
```

Then, to comment on more than one line, we can use the **/*** sign to open the comment and the ***/** sign to close the comment. Any text between these marks will be made into a comment and will not be executed.

```javascript
/* Hidden Message */

console.log("Hello World!")
```
Output :
```
Hello World!
```

You can run code [2.2-Comments.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20Javascript%20Fundamental/2.2-Comments.js) to learn more about the code

### 2.3 Variable & Constant

#### 2.3.1 Variable

Variables are generally like boxes for storing entries (data) with certain data types. with the aim of ease of use. processing, and data management.

In JavaScript there are at least three ways to declare a variable, namely using the keywords var, let, and const. In the ECMAScript 2015 (ES6) version, variable declarations with let and const were introduced to replace var which was considered controversial and prone to causing bugs.

To declare variable in JavaScript, just type code like below : 
```javascript
let lastName;
```
the system will prepare a special space to store data with the name "lastName", an example of the code below:
```javascript
let lastName;
lastName = "Skywalker";

console.log(lastName)
```
Output :
```
Skywalker
```
or after declare a variable you can just enter value of data directly, like code below : 
```javascript
let lastName = "Skywalker";

console.log(lastName)
```
Output :
```
Skywalker
```
> *The code to initialize a value into a variable with an equal sign (=) is called an assignment expression.* 

or you can run code [2.3.1-Variable.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20Javascript%20Fundamental/2.3.1-Variable.js) to know more about variable

#### 2.3.2 Constant

Same concept like variable, but if it is a constant, the value that has been declared cannot be changed. Like this code : 

```javascript
const x = 10;

console.log(x);
```
Output : 
```
10
```
or you can run code [2.3.2-Constant.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20Javascript%20Fundamental/2.3.2-Constant.js) to know more about constant

### 2.4 Data Type

Previously, we learned about storing data in variables and constants, now we are learning about data types, which mean what is stored in a variable or constant. Text? Number? or else? In JavaScript there are several data types, namely :

#### 2.4.1 Undefined

This data type is formed when a variable has no value. That is, when we declare a variable without initializing its value, the variable becomes undefined. Example:

```javascript
let x;
console.log(typeof(x));
```
Output : 
```
Undefined
```
> *The typeof() function is used to confirm the data type of a variable by returning the data type in text form.*

in the variable x there is no clear content or output declaration, so it outputs undefined/

You can explore more in code [2.4.1-Undefineddatatype.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20Javascript%20Fundamental/2.4.1-Undefineddatatype.js)

#### 2.4.2 Numbers (Integer)

The value of the number data type is a number. Variables with the data type number are written like numbers in general : 

```javascript
let x = 10;
```

number in JavaScript it can value with decimal : 

```javascript
let x = 9.16;
```

just like this : 
```javascript
let x = 10;
console.log(typeof(x))

let y = 17.25;
console.log(typeof(y))
```
Output : 
```
number
number
```

In the number data type, we can also perform arithmetic calculations such as addition, subtraction, multiplication, etc. The following operators can be used in arithmetic calculations on the number data type :


| Operator | Function               | Example & Result |
| -------- | ---------------------- | ---------------- |
| +        | Addition               | 10 + 10 = 20     |
| -        | Subtraction            | 15 - 7 = 8       |
| /        | Distribution           | 21 / 7 = 3       |
| *        | Multiplication         | 9 * 9 = 81       |
| %        | Remaining Quotient     | 5 % 2 = 1        |
| **       | Expansion of Numbers   | 3 ** 3 = 27      |

example : 

```javascript
let a = 12;
let b = 9;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
```
Output : 
```
21
3
108
1.3333333333333333
3
```

In arithmetic operators there are also increment (++) and decrement (--) operators. The increment and decrement operators are used to add or subtract 1 to the current variable value.

These operators can be written before or after the variable, but they do not mean the same thing. Here are the conditions:

- If written after the variable (x++), the expression will return the variable value before increasing its value.
- If written before the variable (++x), the expression will produce the variable value after increasing its value.

For more details, below is an example code for implementing this operator, pay attention to the results obtained.
```javascript
let a = 5;
console.log(a++);
/* output: 5 */
console.log(a);
/* output: 6 */

let b = 5;
console.log(++b);
/* output: 6 */
console.log(++b);
/* output: 7 */
```
Output : 
```
5
6
6
7
```
You can explore more about number variable in [2.4.2-Numberdatatype.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20Javascript%20Fundamental/2.4.2-Numberdatatype.js)

#### 2.4.3 BigInt (Big Integer)

In JavaScript, the “Number” data type only includes values from -(2^53 - 1) to (2^53 - 1). For general needs, this value is actually quite sufficient. However, there will be certain needs where we need a larger range of values, such as for cryptography or determining time to microsecond precision.

For values outside Number, we can use the BigInt type. To differentiate between BigInt and Number types, add the character ***n*** to the end of the number. An example is like the code below. Compare it with the Number type.

```javascript
const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);
```
Output : 
```
1234567890123456789012345678901234567890n
1.2345678901234568e+39
```

Even though it is used to store numbers with large values, BigInt can still be used for smaller values.
```javascript
const bigIntButSmall = 7n;
```
We can also use BigInt for general arithmetic operations. The difference is that in the division operation, the results will be rounded down and do not contain a decimal value. An example is like this :
```javascript
console.log(5n + 2n);
console.log(5n - 2n);
console.log(5n * 2n);
console.log(5n / 2n);
console.log(5n % 2n);
```
Output : 
```
7n
3n
10n
2n
1n
```
You can explore more about BigInt variable in [2.4.3-Numberdatatype.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20Javascript%20Fundamental/2.4.3-BigIntdatatype.js)

#### 2.4.4 Strings

The next data type is a string which is text. To assign a value as a string to a variable, use single quotes (') or double quotes (“) between the text. For example : 

```javascript
let greet = "Hello";
console.log(typeof(greet))
```
Output : 
```
string
```

There is no difference between using single quotes or double quotes. You can use quotation marks interchangeably, especially if you have text that contains quotation marks.
```javascript
const question = '"What do you think of JavaScript?" I asked';

console.log(question)
```
Output : 
```
"What do you think of JavaScript?" I asked
```
But if there's a single quotation mark in a text, must add a backslash "\", so the code is not confused 
- Error code : 
```javascript
const Wanswer = '"I think it's awesome!" he answered confidently'; 
console.log(Wanswer);
//wrong, the code will be error
```
Output : 
```
const answer = '"I think it's awesome!" he answered confidently';
                            ^

SyntaxError: Unexpected identifier
```
- Right code :
```javascript
const answer = '"I think it\'s awesome!" he answered confidently';

console.log(answer);
```
Output : 
```
"I think it's awesome!" he answered confidently
```

In Strings, we can also use the plus operator (+). This operator functions to combine two separate texts into one text. Examples like this : 
```javascript
let greet = "Hello";
let moreGreet = greet + greet;
console.log(moreGreet);
```
Output : 
```
HelloHello
```
> *Remember, string concatenation as above will combine strings as is, so if you want to combine two or more words you need to add your own spaces.*

Apart from string concatenation, JavaScript also supports string interpolation. Simply put, we can insert variables into a template string. Examples are as follows : 

```javascript
const myName = "Luke";
console.log(`Hello, my name is ${myName}.`);
```
Output : 
```
Hello, my name is Luke.
```

You can explore more about String variable in [2.4.4-Stringdatatype.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20Javascript%20Fundamental/2.4.4-Stringdatatype.js)

#### 2.4.5 Boolean

Boolean only has two values, namely true or false. This data type is the main key in determining logic. We will use it a lot later in the if/else statement material.
```javascript
let x = true;
let y = false;

console.log(typeof(x))
console.log(typeof(y))
```
Output : 
```
boolean
boolean
```
We can also use comparison operators such as more than (>) or less than (<). For example : 
```javascript
const a = 10;
const b = 12;

let isGreater = a > b;
let isLess = a < b;

console.log(isGreater);
console.log(isLess);
```
Output : 
```
false
true
```

You can explore more about String variable in [2.4.5-Booleandatatype.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20Javascript%20Fundamental/2.4.5-Booleandatatype.js)

#### 2.4.6 Null

The next type is null. Similar to undefined, but null needs to be initialized on the variable. Null is usually used as a temporary value in a variable, but actually the value "does not exist".

Sometimes we need to create a variable, but we don't need any values yet and don't want to be bound by any data types. Well, instead of not assigning any value (the variable will be undefined) we should give the variable a null value and change it later when we need it.

To assign null to a variable, we can use the null keyword when the variable is initialized.

```javascript
let someLaterData = null;
console.log(someLaterData);
```
Output : 
```
null
```

You can explore more about String variable in [2.4.6-Nulldatatype.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20Javascript%20Fundamental/2.4.6-Nulldatatype.js)