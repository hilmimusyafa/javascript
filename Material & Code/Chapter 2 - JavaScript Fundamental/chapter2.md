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

You can run code [2.1-Writeyourcode.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.1-Writeyourcode.JS) to learn more about the code

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

You can run code [2.2-Comments.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.2-Comments.js) to learn more about the code

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

or you can run code [2.3.1-Variable.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.3.1-Variable.js) to know more about variable

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
or you can run code [2.3.2-Constant.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.3.2-Constant.js) to know more about constant

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

You can explore more in code [2.4.1-Undefineddatatype.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.4.1-Undefineddatatype.js)

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
You can explore more about number variable in [2.4.2-Numberdatatype.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.4.2-Numberdatatype.js)

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
You can explore more about BigInt variable in [2.4.3-Numberdatatype.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.4.3-BigIntdatatype.js)

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

You can explore more about String variable in [2.4.4-Stringdatatype.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.4.4-Stringdatatype.js)

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
We can also use comparison operators such as more than (>) or less than (<). For example in code : 
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

You can explore more about String variable in [2.4.5-Booleandatatype.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.4.5-Booleandatatype.js)

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

You can explore more about String variable in [2.4.6-Nulldatatype.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.4.6-Nulldatatype.js)

#### 2.4.7 Symbol 

Symbols are a new data type introduced in ES6. The Symbol data type is used to indicate a unique identifier. When creating a symbol, we can give a description or name of the symbol like this : 

```javascript
const id = Symbol("id");

console.log(id);
```
Output : 
```
Symbol(id)
```

Symbols are called unique identifiers because even if we create two symbol variables with the same name or description, the two values are still considered different. For example, see the following code : 
```javascript
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 == id2);
```
Output : 
```
false
```
You can explore more about String variable in [2.4.7-Symboldatatype.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.4.7-Symboldatatype.js)

### 2.5 Operator

Operators in programming languages themselves are symbols that tell the interpreter to perform operations such as mathematics, relational, or logic to produce certain results.

#### 2.5.1 Assignment Operator

This operator is used to assign values to variables. Basically this operator is an equal sign (=), where this sign is used to initialize the value of a variable. Place the variable you want to assign a value to on the left, while the value is on the right. Between the two there is the assignment operator.
```javascript
x = y;
```

The expression above means that we initialize the y value in the variable x, so that the x value now has the same value as y.

There are several additional assignment operators for initializing values in variables. We can call it a shortcut in determining values. For example:
```javascript
let x = 10;
let y = 5

x += y;

console.log(x);
```
Output : 
```
15
```
So, the meaning of x+=y is x = x + y, this case is usually found in looping functions in programming, also to shorten lines of code.
```javascript
let x = 10;
let y = 5;
 
x += y; // mean -> x = x + y;
x -= y; // mean -> x = x - y;
x *= y; // mean -> x = x * y;
x /= y; // mean -> x = x / y;
x %= y; // mean -> x = x % y;
```

You can explore more about Assignment Opeartor in [2.5.1-Assignmentoperator.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.5.1-Assignmentoperator.js)

#### 2.5.2 Comparison Operator

This is simple comparation of 2 in JavaScript for evaluate and compare two values. The following is a list of operators and their functions : 

| Operator | Function                                                                                           | True Example      | False Example      |
| -------- | -------------------------------------------------------------------------------------------------- | ----------------- | ------------------ |
| ==       | Compares the two values, but ignores the data type.                                                | 5 == 5? True      | 5 == 4? False      |
| !=       | Comparing two values must be unequal, but ignores data type.                                       | 5 != 4? True      | 5 != 5? False      |
| ===      | Compares the two values along with data types.                                                     | "5" === "5"? True | "5" === 5? False   | 
| !==	   | Comparing the two values and their data types must not be the same.                                | "5" !== 4? True   | "5" !== "5"? False |
| >        | Compares two values whether the first value is more than the second value.                         | 5 > 2? True       | 5 > 5? False       |
| >=       | Compares two values to see whether the first value is greater than or equal to the second value.   | 5 >= 5? True      | 5 >= 6? False      |
| <        | Compares two values whether the first value is less than the second value.                         | 5 < 6? True       | 6 < 5? False       |
| <=       | Compares two values whether the first value is less or equal to the second value.                  | 5 <= 5? True      | 6 <= 5 ? True      |

Example in code : 
```javascript
let a = 10;
let b = 5;
let c = "10";

console.log(a == b); //10 == 5? False
console.log(a != b); //10 != 5? True
console.log(a === c); //10 === "10"? False
console.log(a !== b); //10 !== "10"? True
console.log(a > b); // 10 > 5? True
console.log(b >= b); // 5 => 5? True
console.log(a < b); // 10 < 5? False
console.log(a <= a); // 10 <= 10? True
```
Output : 
```
false
true 
false
true
true
true
false
true
```

***Difference between “Same” and “Identical”***
When it comes to comparison operators in JavaScript, the thing that gets a little tricky is differentiating between “same” (==) and “identical” (===).

We already know that every value must have a data type, be it number, string or boolean. For example, the string “10” and the number 10 are similar, but they are not exactly the same.

This is what differentiates between same and identical in JavaScript. If we want to compare only based on the similarity of the values ​​we can use (==) but if we want to compare by paying attention to the data type we use (===).

Examples are as follows : 
```javascript
const aString = '10';
const aNumber = 10

console.log(aString == aNumber) // true, because the values ​​are both 10
console.log(aString === aNumber) // false, because even though the value is the same, the data type is different
```
Output : 
```
true
false
```
You can explore more about Comparison Operator in [2.5.2-Comparisonoperator.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.5.2-Comparisonoperator.js)

#### 2.5.3 Logical Operator

There are several other operators that we can use to define more complex logic, namely logical operators. With logical operators, we can use a combination of two or even more boolean values in specifying logic.

In JavaScript there are three special characters that function as logical operators. The following are various logical operators and their functions : 

| Operator | Description                                                                                            |
| -------- | ------------------------------------------------------------------------------------------------------ |
| &&       | Operator and (and). The logic will produce a true value if all conditions are met (value true).        |
| \|\|     | Operator or (or). The logic will produce a true value if one of the conditions is met (values true).   |
| !        | Operator no (not). Used to reverse a condition.                                                        |

Example in code : 
```javascript
let a = 10;
let b = 12;

/* AND operator */
console.log(a < 15 && b > 10); // (true && true) -> true
console.log(a > 15 && b > 10); // (false && true) -> false

/* OR operator */
console.log(a < 15 || b > 10); // (true || true) -> true
console.log(a > 15 || b > 10); // (false || true) -> true

/* NOT operator */
console.log(!(a < 15)); // !(true) -> false
console.log(!(a < 15 && b > 10)); // !(true && true) -> !(true) -> false
```
Output : 
```
true
false
true
true
false
false
```
Maybe some of us are asking, what is the actual use of boolean values other than just displaying true and false values? In the discussion of data types, it has been mentioned that Boolean is one of the keys to programming logic, because Boolean can control how our program flow will run.

So how do Booleans control program flow? In the next material, we will discuss if/else statements which can control the flow of the program, of course using boolean statements is very useful.

You can explore more about Logical Operator in [2.5.3-Logicaloperator.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.5.3-Logicaloperator.js)

### 2.6 If/Else Statement

#### 2.6.1 Knowing If/Else Statement
When developing a program, we will encounter branching paths depending on the conditions that occur. To accommodate and check a condition in JavaScript, we use the if keyword.

The if statement will test a condition. If the condition evaluates to true, then the code block within it will be executed. Conversely, if it is false, then the specified process will be skipped.

![Untitled Diagram.drawio](https://hackmd.io/_uploads/rktX_rTPA.png)

If the above Flowchart is translated into code, it will look like this:
```javascript
let isRaining = false;

console.log("Is it necessary to bring an umbrella?")
if (isRaining == true) {
    console.log("It's raining outside, use the Umbrella");
} else {
    console.log("It's not raining outside, no need to bring an umbrella")
}
```
Output : 
```
Is it necessary to bring an umbrella?
It's raining outside, use the Umbrella
```
but if the value isRaining is changed to false then the results will change according to the logic. You can also use comparison operators in this if/else : 
```javascript
let x = 50;

if (x > 70) {
    console.log(x);
} else {
    console.log("Score less than 70");
}
```
Output : 
```
Score less than 70
```
the code will follow the value, if the value is more than 70 then the appropriate value will appear.

In this if/else, if there are 2 more conditions, you can add them with the "else if" option according to the appropriate conditions : 
```javascript
let language = "French";
let greeting = "Selamat Pagi"

if(language === "English") {
    greeting = "Good Morning!";
} else if(language === "French") {
    greeting = "Bonjour!"
} else if(language === "Japanese") {
    greeting = "Ohayou Gozaimasu!"
}

console.log(greeting);
```
Output : 
```
Bonjour!
```
Apart from the if statement above, JavaScript also supports ternary operators or conditional expressions. With this, we can write if-else statements in just one line.
```javascript
const isMember = false;
const discount = isMember ? 0.1 : 0;
console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`)
```
Output : 
```
Anda mendapatkan diskon sebesar 0%
```
> *Operator ? in JavaScript it is a ternary operator which is used as a short form of the if...else statement. This operator requires three operands: condition, result if condition is true, and result if condition is false. The syntax is : *
>
> *condition ? expressionIfTrue : expressionIfFalse*

In if/else logic also can use logical operator like and(&&), or(||), and not (!). Example : 
```javascript
let language = "Japanese";
let time = "Morning";
let greeting = "Selamat Pagi"

if(language === "English" && time == "Morning") {
    greeting = "Good Morning!";
} else if(language === "French" && time == "Morning") {
    greeting = "Bonjour!"
} else if(language === "Japanese" && time == "Morning") {
    greeting = "Ohayou Gozaimasu!"
} else {
    greeting = "Hola"
}

console.log(greeting);
```
Output : 
```
Ohayou Gozaimasu
```

You can explore more about Logical Operator in [2.6.1-Basicifelsestatement.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.6.1-Ifelsestatement.js)

#### 2.6.2 Truthy & Falsy

In the if statement we need to enter the expression that will be evaluated. Generally, the expression returns a boolean value to determine whether the condition is true or false. So what if we write an expression that does not return a boolean value? The answer is yes.

Every value in JavaScript basically also inherits boolean properties. This value is known as truthy or false. A truthy value means a value that, when evaluated, produces a true value, and a false value also means false. So which is truthy and falsy? Apart from the false boolean value, data types or values that are considered false include

- Number 0
- BigInt 0n
- Empty strings like “” or ‘’
- null
- undefined
- NaN, or Not a Number

Example : 
```javascript
let name = "";

if (name) {
    console.log(`Halo, ${name}`);
} else {
    console.log("Name is still empty");
}
```
Output : 
```
Name is still empty
```

You can explore more about Logical Operator in [2.6.2-Truthy&falsy.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.6.2-Truty%26falsy.js)

### 2.7 Switch Case Statement

Switch Case Statement is like if/else, JavaScript also supports switch statements to check many conditions more easily and concisely. See this logic :
```javascript
switch (expression) {
  case value1:
    // do something
    break;
  case value2:
    // do something
    break;
  ...
  ...
  default:
    // do something else
}
```

The brackets after the "switch" keyword contain the variable or expression that will be evaluated. Then for each condition that may occur, we enter the keyword "case" followed by a valid value. If the condition in the case is the same as the variable in the switch, then the code block after the colon (:) will be executed. The "break" keyword is used to exit the switch process. There is one case called default which has the same function as the else keyword in if-else control flow. If there is no equal value to the variable on the switch, then this block of code will be executed. Like this example : 
```javascript
let language = "French";
let greeting = null;

switch (language) {
  case "English":
    greeting = "Good Morning!";
    break;
  case "French":
    greeting = "Bonjour!";
    break;
  case "Japanese":
    greeting = "Ohayou Gozaimasu!";
    break;
  default:
    greeting = "Selamat Pagi!";
}

console.log(greeting);
```
Output : 
```
Bonjour!
```
You can explore more aboutSwitch Case Statement in [2.7-Switchcasestatement.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.7-Switchcasestatement.js)

### 2.8 Loop

When we write the code, what if we want to try to write the code to output 1-5, of course it's easy, right? But what happens if it's 1 to 10 thousand? 100 thousand? 1 million? Of course it will take a long time, that's why there is a loop function in programming.

#### 2.8.1 For Loop

For loop is a simple repetition that is often used if you know how many times to repeat, for example I want to repeat three times, so I take the numbers 0 - 2 or 1 - 3.
> *In computer logic, 0 is a logical number with no positive or negative information. So if there is 0 - 2 then there are 3 numbers (0, 1, and 2).*
Here the basic explanation : 
```javascript
for(initialize variable; test condition; change variable value) {
 // do something
}
```
And this is the example code : 
```javascript
for(let i = 0; i < 5; i++) {
    console.log(i);
}
```
Output : 
```
0
1
2
3
4
```
There are three main parts to the for syntax above:

- First, variable i as the iteration index. In this variable we initialize the initial value of the loop.
- Second, comparison operations. In this section, JavaScript will check the condition whether the loop still needs to be done. If it is true, the code in the for block will be executed.
- Third, increment/decrement. Here we perform an iterative addition or subtraction of variables. So, in the example above, variable i will be increased by 1 at the end of each loop. Changing this value is important because if we change the value, the loop process can continue as long as the condition is met.

If interpreted, then the code above can be interpreted as "If i is less than 5, then display the value of i."

For exploring about For Loop you can go to [2.8.1-Forloop.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.8.1-Forloop.js)

#### 2.8.2 For of Loop

Another way to do looping is to use for..of. For of is starting to arrive in ECMAScript 2015 (ES6). This method is much simpler and modern than the usual for loop. The basic syntax of a for of loop is like this:
```javascript
for(arrayItems of myArray) {
 // do something
}
```

With "for..of" the value of each array will be initialized in a new variable that we define in each loop process. The number of looping processes will also adjust to the size of the array. It's as simple as us doing the command “Hey JavaScript! Loop through myArray, accessing each value, and storing it in the arrayItem variable.” In the loop process we use the arrayItem variable to access each value of the myArray item. Here the example :
```javascript
for(const arrayItem of myArray) {
    console.log(arrayItem)
}
```
Output : 
```
Luke
Han
Chewbacca
Leia
```
In essence, the basis for of is as many known quantities as possible (if the example is an array).

You can explore more about For of Loop in [2.8.2-ForofLoop.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.8.2-ForofLoop.js)

#### 2.8.3 While and do-while

Another method for looping is with the while statement. Just like for, the while instruction is different from repeating if a condition has not been reached.

This means, for example, when setting a variable that has not yet reached a value of true or has not reached a number, it will repeat until it reaches a value that is set to complete or has a value of true.

Usually while do is used when a repetition has unknown limits, or limits with certain conditions. Example, to display the numbers 1 to 100 with while we can write code like the following:

```javascript
let i = 1;

while (i <= 100) {
    console.log(i);
    i++;
}
```
Output : 
```
1
2
3
4
...
1000
```

Just like while do, do while has similarities only in different languages, if while do the stop condition is done first then the do command, if do while the command is treated first, then when (some people call it something like repeat until in other programming languages).

```javascript
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 100);
```
Output : 
```
1
2
3
4
...
1000
```

For exploring about While do - do while you can go to [2.8.3-Whiledodowhile.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.8.3-Whiledodowhile.js)

#### 2.8.4 Infinite loops

When implementing loops in programs, there is one condition that we need to avoid, namely infinite loops. Infinite loop or endless loop is a condition where our program is stuck in a loop. It will continue to run until it causes the application and computer to crash unless there is external intervention, such as turning off the application.

```javascript
let i = 1;
 
while (i <= 5) {
    console.log(i);
}
```
Output : 
```

```

Because the variable i always has the value 1. As a result, the condition i <= 5 will always evaluate to true which results in the application continuing to print 1 to the console and thus crashing.

For exploring about Infinite Loop you can go to [2.8.4-Infiniteloop.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.8.4-Infiniteloop.js) but don't forget to terminate the program because it always run in your computer.

### 2.9 Coding Quiz : Variable and Data Type

To test practical skills in understanding variables and data types in JavaScript, let's complete the following quiz.

```
* TODO:
 * Create variables firstName, lastName, age, isMarried with the following conditions:
 * - firstName: string data type, with value "John".
 * - lastName: string data type, with value "Doe".
 * - age: number data type, with value 25.
 * - isMarried: boolean data type, with value true.
 */
```
Answer Code : 
```javascript
let firstName, lastName, age, isMarried;

firstName = "John";
lastName = "Doe";
age = 25;
isMarried = true;
```
Optional : 
```javascript
console.log(firstName, lastName, age, isMarried)
```
Output : 
```
John Doe 25 true
```

For source code explore in [2.9-Quizcodingvariabledataype.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.9-Quizcodingvariabledataype.js)

### 2.10 Coding Quiz : Operator Logic and If Else

To test practical skills in understanding operator logic and if/ else in JavaScript, let's complete the following quiz.

```
Create if logic to evaluate the score value with the following conditions:
1. If the score is 90 or more
 - Fill the result variable with the value: 'Congratulations! You got an A.'
2. If the score is 80 to 89
 - Fill the result variable with the value: 'You got a B.'
3. If the score is 70 to 79
 - Fill the result variable with the value: 'You got a C.'
4. If the score is 60 to 69:
 - Fill the result variable with the value: 'You got a D.' 
5. If the score is below 60:
 - Fill the result variable with the value: 'You got the value E.'

Note: - Please do not delete pre-existing codes.
      - You don't need to create result and score variables manually. Use the variables provided.
```
Answer Code : 
```javascript
function scoreChecker(score) {
    let result;
    
    if(score >= 90) {
        result = 'Congratulations! You got an A.';
    } else if(score <= 89 && score >= 80) {
        result = 'You got a B.';
    } else if(score <= 79 && score >= 70) {
        result = 'You got a C.';
    } else if(score <= 69 && score >= 60) {
        result = 'You got a D.';
    } else {
        result = 'You got a E.';
    }
    
    return result;
}

module.exports = scoreChecker;
```

For source code explore in [2.10-Quizcodingifelsestatement.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.10-Quizcodingifelsestatement.js)