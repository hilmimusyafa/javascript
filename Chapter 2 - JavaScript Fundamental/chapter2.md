## Chapter 2 : Javascript Fundamental

### 2.1 JavaScript Installation on Windows

1. Install Node.js:

- Go to the Node.js website.
- Download the Windows installer (LTS version recommended).
- Run the installer and follow the prompts.
- Verify Installation:

2. Open Command Prompt.
Type node -v and npm -v to check if Node.js and npm are installed correctly.

### 2.2 Code

Yeah of course, in the first of Material we will learn about The Code itself, In JavaScript to write a program including easy things, to output? easy, for declaration? easy, and many more. Therefore JavaScript is a language that is easy to understand by humans, but still powerful for many things.

JavaScript :
```javascript
console.log("Hello World!");
console.log("Hilmi Musyafa");
```
Output: 
```
Hello World!
```
> *console.log is the default JavaScript code to display messages to the console, which can be a web console or a console from a terminal/command prompt.*
> 
> *"" means string data type*
> 
You can run code [2.2-Code.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.1-Writeyourcode.JS) to learn more about the code

### 2.3 Comments

Comments are instructions that tell the computer to ignore the command or code we write. A comment will be missed by the interpreter or compiler, so it will not affect the flow of the program we write. Usually, comments is to make sign or documentation.

There are two type of Comments : 
1. Using double-slash " // "
```javascript
console.log("Hello World!")
//console.log("Sigma!")
```
Output : 
```
Hello World!
```
2. Using " */ " for more than 1 line
```javascript
/* Hidden Message */

console.log("Hello World!")
```
Output :
```
Hello World!
```

You can run code [2.3-Comments.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.2-Comments.js) to learn more about the code

### 2.4 Variable & Constant

#### 2.4.1 Variable

Variables in easy explanation, is like if we put a value or thing in the box. Variables are containers for storing information. 

In JavaScript there are at least three ways to declare a variable, namely using the keywords var, let, and const. In the ECMAScript 2015 (ES6) version, variable declarations with let and const were introduced to replace var which was considered controversial and prone to causing bugs.

Here's to declared something in JavaScript : 
```javascript
let stock;
```
and the system will take a memory in the system for saving stock value.
```javascript
let stock;
stock = 13;

console.log(stock)
```
Output :
```
13
```
You can just enter value of data directly, like code below : 
```javascript
let stock = 13;

console.log(stock)
```
Output :
```
13
```
or you can run code [2.4.1-Variable.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.3.1-Variable.js) to know more about variable.

#### 2.4.2 Constant

Same concept like variable, but if it is a constant, the value that has been declared cannot be changed. Like this code : 

```javascript
const x = 10;

console.log(x);
```
Output : 
```
10
```
Proof it can't change : 
```
const x = 10;

x = 20
console.log(x);
```
Output : 
```
10
```
Didn't believe? Run this [2.4.2-Constant.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.3.2-Constant.js) to know more about constant

### 2.5 Data Type

In computer, there's many things to process, is it a number? or is it aplhabet? or is it a anything? there's a many things will be process, and know let's learn about data type, specially in JavaScript.

#### 2.5.1 Undefined

This data type is show when a variable has no value. When, declare a variable without initializing the value, the variable becomes undefined. Example:

```javascript
let x;
console.log(typeof(x));
```
Output : 
```
Undefined
```
> *The typeof() function is used to confirm the data type of a variable by returning the data type in text form.*

In the variable x there is no clear content or output declaration, so it outputs undefined

You can explore more about Undefined Data Type in [2.5.1-Undefineddatatype.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.4.1-Undefineddatatype.js)

#### 2.5.2 Numbers (Integer)

The value of the number data type is a literally number. It can use in  arithmetic. Variables with the data type number are written like numbers in general : 
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
Like a definition, numberic data type can arithmetic calculation. Here's the example :

| Operator | Function               | Example & Result |
| -------- | ---------------------- | ---------------- |
| +        | Addition               | 10 + 10 = 20     |
| -        | Subtraction            | 15 - 7 = 8       |
| *        | Multiplication         | 9 * 9 = 81       |
| /        | Distribution           | 21 / 7 = 3       |
| %        | Remaining Quotient     | 5 % 2 = 1        |
| **       | Expansion of Numbers   | 3 ** 3 = 27      |

example : 
```javascript
let x = 12;
let y = 9;

console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x % y)
```
Output : 
```
21
3
108
1.3333333333333333
3
```
In arithmetic operators there are also increment (++) and decrement (--) operators. The increment and decrement operators are used to add or subtract 1 to the current variable value. These operators can be written before or after the variable, but they do not mean the same thing. Here are the conditions:

- If written after the variable (x++), the expression will return the variable value before increasing its value.
- If written before the variable (++x), the expression will produce the variable value after increasing its value.

For more details, below is an example code for implementing this operator, pay attention to the results obtained.
```javascript
let a = 5;
console.log(a++);
console.log(a);

let b = 5;
console.log(++b);
console.log(++b);
```
Output : 
```
5
6
6
7
```
You can explore more about number variable in [2.5.2-Numberdatatype.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.4.2-Numberdatatype.js)

#### 2.5.3 BigInt (Big Integer)

In JavaScript, the BigInt data type is introduced to handle larger integers that exceed the limits of the Number data type, which ranges from -(2^53 - 1) to (2^53 - 1). While this range is adequate for most everyday calculations, certain applications like cryptography and precise time measurements in microseconds require numbers beyond this limit.

To address these needs, JavaScript provides the BigInt type. You can identify a BigInt by appending the character n to the end of a number. Below is an example comparing BigInt with the standard Number type.

```javascript
let x = 1234567890123456789012345678901234567890n;
let y = 1234567890123456789012345678901234567890;

console.log(x);
console.log(y);
```
Output : 
```
1234567890123456789012345678901234567890n
1.2345678901234568e+39
```
BigInt still can use with small number or arithmetic operations : 
```javascript
const z = 7n;
```
```javascript
console.log(5n + 2n);
console.log(5n - 2n);
console.log(5n * 2n);
console.log(5n / 2n); // rounded down and not contain a decimal value
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
You can explore more about BigInt variable in [2.5.3-Numberdatatype.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.4.3-BigIntdatatype.js)

#### 2.5.4 Strings

The next data type is a string which is text. To assign a value as a string to a variable, use single quotes (') or double quotes (“) between the text. For example : 
```javascript
let day = "Sunday";
console.log(typeof(greet))
```
Output : 
```
string
```
There is no difference between using single quotes or double quotes. You can use quotation marks interchangeably, especially if there's a text that contains quotation marks.
```javascript
const marchText = '"Hey caelus, what do you think about my suit?" March7th asked';

console.log(marchText)
```
Output : 
```
"Hey caelus, what do you think about my suit?" March7th asked
```
But if there's a single quotation mark in a text, must add a backslash "\\", so the code is not confused 
- Error code : 
```javascript
const caelusText = '"I think it's cute! " he answered with smile'; 
console.log(caelusText);
//wrong, the code will be error
```
Output : 
```
const caelusText = '"I think it's cute!" he answered with smile';
                            ^

SyntaxError: Unexpected identifier
```
- Right code :
```javascript
const caelusText2 = '"I think it\'s cute!" he answered with smile';

console.log(caelusText2);
```
Output : 
```
"I think it's cute!" he answered with smile
```
In Strings, also can use the plus operator (+). This operator functions to combine two separate texts into one text. Examples like this : 
```javascript
let whoIs = "I am";
let name =  "March7th";
console.log(whoIs + name);
```
Output : 
```
I am March7th
```
> *Remember, string concatenation as above will combine strings as is, so if you want to combine two or more words you need to add your own spaces.*

JavaScript also supports string interpolation. Simply put, we can insert variables into a template string. Examples are as follows : 

```javascript
const name = "Caelus";
console.log(`Hello, my name is ${name}.`);
```
Output : 
```
Hello, my name is Caelus.
```

You can explore more about String variable in [2.5.4-Stringdatatype.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.4.4-Stringdatatype.js)

#### 2.5.5 Boolean

Boolean is literally coputing language like binarry, the value just true or false (like 1 or 0, like no or yes). This data type is the main key in determining logic. We will use it a lot later in the if/else statement material.
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

console.log(a > b);
console.log(a < b);
```
Output : 
```
false
true
```
You can explore more about String variable in [2.5.5-Booleandatatype.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.4.5-Booleandatatype.js)

#### 2.5.6 Null

Similar to undefined, but it is said to be null when it is intentionally entered into a variable, but in that variable there is no value, while undefined is indeed accidentally filled so that it produces the result value / undefined. Sometimes it is used as a tag that this variable is temporarily empty, therefore the null variable was created. To assign just type null, and system will be known : 
```javascript
let someLaterData = null;
console.log(someLaterData);
```
Output : 
```
null
```
You can explore more about String variable in [2.5.6-Nulldatatype.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.4.6-Nulldatatype.js)

#### 2.5.7 Symbol 

The Symbol data type is used to indicate a unique identifier. When creating a symbol, we can give a description or name of the symbol like this : 

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
You can explore more about String variable in [2.5.7-Symboldatatype.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.4.7-Symboldatatype.js)

### 2.6 Operator

Operators in programming is same like in real world. Such as mathematics, relational, or logic to produce certain results.

#### 2.6.1 Assignment Operator

This operator is used to assign values to variables. Basically this operator is an equal sign (=), where this sign is used to initialize the value of a variable. Place the variable you want to assign a value to on the left, while the value is on the right. Between the two there is the assignment operator.

This operator is literally equal sign "=", and the mean or explanation of this operator is same like in mathematics, is just same as or like, if in the code is x = 5, it means x is 5, if x = y it means x is y, just like that :
```javascript
let x, y;

y = 10
x = y;

console.log(x);
```
Output : 
```
10
```
But in programming you can add some operators, example : 
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
You can explore more about Assignment Opeartor in [2.6.1-Assignmentoperator.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.5.1-Assignmentoperator.js)

#### 2.6.2 Comparison Operator

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

>***Difference between “\==” and “===”***
>
> Simple, if you just know the different between 10 and "10", yeah 10 is number and "10" is string. if we use "\==" (or same) it will true because its literally same 10, but if use "===" (or similar) it will false because its different data type. 10 is use number data type but "10" is use string datatype. Remember, "=\=" is just "what is the content?", "=\==" with data type.

Examples are as follows : 
```javascript
const aString = '10';
const aNumber = 10;

console.log(aString == aNumber) // true, because the values are both 10
console.log(aString === aNumber) // false, see? the value is same, but the data type is different
```
Output : 
```
true
false
```
You can explore more about Comparison Operator in [2.6.2-Comparisonoperator.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.5.2-Comparisonoperator.js)


#### 2.6.3 Logical Operator

Logical operator is to use with define more complex like combination of two or even more boolean values in specifying logic. Usually used as a condition for running a certain section of code.

In JavaScript there are three special characters that function as logical operators. The following are various logical operators and their functions : 

| Operator | Description                                                                                            |
| -------- | ------------------------------------------------------------------------------------------------------ |
| &&       | Operator and (and). The logic will produce a true value if all conditions are met (value true).        |
| \|\|     | Operator or (or). The logic will produce a true value if one of the conditions is met (values true).   |
| !        | Operator no (not). Used to reverse a condition.                                                        |

Example in code : 
```javascript
let x = 10;
let y = 12;

// AND operator
console.log(x < 15 && y > 10); // (true && true) -> true
console.log(x > 15 && y > 10); // (false && true) -> false

// OR operator
console.log(x < 15 || y > 10); // (true || true) -> true
console.log(x > 15 || y > 10); // (false || true) -> true

// NOT operator 
console.log(!(x < 15)); // !(true) -> false
console.log(!(x < 15 && y > 10)); // !(true && true) -> !(true) -> false
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
This things will be use in if/ else statement and programming loop, after this.

You can explore more about Logical Operator in [2.6.3-Logicaloperator.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.5.3-Logicaloperator.js)

### 2.7 If/Else Statement

An if else statement in JavaScript is a control flow statement that allows you to execute different blocks of code based on a condition. It helps in decision-making processes by testing a condition and executing a block of code if the condition is true, and another block of code if the condition is false.

![Tambahkan sedikit teks isi](https://hackmd.io/_uploads/BJwD9w_FR.png)

If the above Flowchart is translated into code, it will look like this:
```javascript
let competitive = false;

console.log("Are you playing competitive game?")
if (competitive == true) {
    console.log("Use Mice for peformance");
} else {
    console.log("Use Controller, you can chill while play")
}
```
Output : 
```
Are you playing competitive game?
Use Controller, you can chill while play
```
It will output "Mice" if the variable is true. And in if/ else also can use number data type :
```javascript
let x = 50;

if (x > 70) {
    console.log(x);
} else {
    console.log("Not approve");
}
```
Output : 
```
Not approve
```
Same, if the value more than 70 it will output the value. In this if/else, if there are 2 more conditions, you can add them with the "else if" option according to the appropriate conditions, here's an example logic of March7th greeting time to Caelus : 
```javascript
let time = "Morning";
let greeting;

if(time === "Morning") {
    greeting = "Good Morning! Caelus, How's your sleep?";
} else if(time === "Noon") {
    greeting = "Good Afternoon! Caelus, what are you doing?"
} else if(time === "Night") {
    greeting = "Night! Caelus, have a nice dream"
}

console.log(greeting);
```
Output : 
```
Good Morning! Caelus, How's your sleep?
```
In if/else logic also can use logical operator like and "&&", or "||", and not "!". If previously the logic was march7th to Caelus, then the example after this is different :
```javascript
let toCharacter = "March7th";
let time = "Morning";
let greeting;

if(toCharacter === "March7th" && time == "Morning") {
    greeting = "Morning! I'm sleep well, How about you?";
} else if(toCharacter === "March7th" && time == "Noon") {
    greeting = "Hey! I want to do some adventure today"
} else if(toCharacter === "March7th" && time == "Night") {
    greeting = "Good Night, March7th! You too"
} else {
    greeting = undefined
}

console.log(greeting);
```
Output : 
```
Morning! I'm sleep well, How about you?
```
Apart from the if statement above, JavaScript also supports ternary operators or conditional expressions. With this, we can write if-else statements in just one line.
```javascript
const isMember = false;
const discount = isMember ? 0.1 : 0;
console.log(`You get ${discount * 100}% discount`)
```
Output : 
```
You get 0% discount
```
> *Operator ? in JavaScript it is a ternary operator which is used as a short form of the if...else statement. This operator requires three operands: condition, result if condition is true, and result if condition is false. The syntax is : *
>
> *condition ? expressionIfTrue : expressionIfFalse*
> 
You can explore more about Logical Operator in [2.7-Basicifelsestatement.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.6.1-Ifelsestatement.js)

### 2.8 Switch Case Statement

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
The switch statement evaluates a variable or expression and executes the code corresponding to the matching case. Each case is followed by a value and a colon (:). If a match is found, the code block is executed. The break keyword exits the switch statement to prevent fall-through. The default case acts like the else in an if-else statement, executing if no matches are found.
```javascript
let toCharacter = "Himeko";
let greeting = null;

switch (toCharacter) {
    case "Himeko":
        greeting = "Hey Himeko, what happened?";
        break;
    case "Welt":
        greeting = "Mister Welt, is there a something?";
        break;
    case "Dan Heng":
        greeting = "Are you call me, Dan Heng?";
        break;
    default:
        greeting = "What Happened?";
}

console.log(greeting);
```
Output : 
```
Hey Himeko, what happened?
```
You can explore more aboutSwitch Case Statement in [2.7-Switchcasestatement.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.7-Switchcasestatement.js)

### 2.9 Loop

When we write the code, what if we want to try to write the code to output 1-5, of course it's easy, right? But what happens if it's 1 to 10 thousand? 100 thousand? 1 million? Of course it will take a long time, that's why there is a loop function in programming.

#### 2.9.1 For Loop

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
Here a explanation, if you need :

1. Iteration Index: The i variable starts the loop with an initial value.
2. Comparison Operation: Checks if the loop should continue. If true, the code inside the loop runs.
3. Increment/Decrement: Updates i at the end of each loop, usually increasing it by 1 to ensure the loop progresses.

If interpreted, then the code above can be interpreted as "If i is less than 5, then display the value of i."

For exploring about For Loop you can go to [2.8.1-Forloop.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.8.1-Forloop.js)

#### 2.9.2 For of Loop

Another way to do looping is to use for..of. For of is starting to arrive in ECMAScript 2015 (ES6). This method is much simpler and modern than the usual for loop. The basic syntax of a for of loop is like this:
```javascript
for(arrayItems of theArray) {
 // do something
}
```
It's literally same like for loop, but the different is if there's a array it can loop as many as the number of array members. Here the example :
```javascript
let astralExpress = ["Himeko", "Welt", "Dan Heng", "March7th", "Caelus"]

for(const arrayItem of astralExpress) {
    console.log(arrayItem)
}
```
Output : 
```
Himeko
Welt
Dan Heng
March7th
Caelus
```
In essence, the basis for of is as many known quantities as possible (if the example is an array).

You can explore more about For of Loop in [2.8.2-ForofLoop.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.8.2-ForofLoop.js)

#### 2.9.3 While and do-while

Another method for looping is with the while statement. Just like for the while instruction is different from repeating if a condition has not been reached.

This means, for example, when setting a variable that has not yet reached a value of true or has not reached a number, it will repeat until it reaches a value that is set to complete or has a value of true.

Usually while do is used when a repetition has unknown limits, or limits with certain conditions. Example to output 1 to 1000 :

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

#### 2.9.4 Infinite loops

Simple, is just loop but it endless. In programming, this should be avoided because it will never finish and will eat up computer performance.

```javascript
let i = 1;
 
while (i <= 5) {
    console.log(i);
}
```
Output : 
```

```
The variable i is alwayas 1 because there are no Increment "i++". So, the program always in loop and make a terminal crash.

For exploring about Infinite Loop you can go to [2.8.4-Infiniteloop.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%202%20-%20JavaScript%20Fundamental/2.8.4-Infiniteloop.js) but don't forget to terminate the program because it always run in your computer.
