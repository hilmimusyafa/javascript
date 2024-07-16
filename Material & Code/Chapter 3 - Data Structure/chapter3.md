## Chapter 3 : Data Structure

### 3.1 Object

#### 3.1.1 Basic Explanation of Object

Object is a data type that stores a lot of data in one place (the object itself) with various other data types, making the data more complex.

To assign an object to a variable we use curly brackets "{}".
```javascript
const user = {};
```
Objects contain key and value pairs which are also known as properties. Keys act similar to variable names that store a value. Meanwhile, value contains values with any data type including other objects. The keys and values in the object are written as follows :
```javascript
let object = {key1: "value1", key2: "value2", key3: "value3"}
```
The key must be a string and written before the colon (:), then followed by the value. Even though the key is a string, we don't need to write quotation marks unless there are special characters such as spaces.

![202103300918544d12b9f7429f65353b67b10fc8ad9e08](https://hackmd.io/_uploads/BJpUK50D0.png)

One object can have several key-value pairs separated by commas (,).
```javascript
const user = {firstName: "Luke", lastName: "Skywalker", age: 19, isJedi: true};
```

And it is better to differentiate each line so that we don't have difficulty reading.

```javascript
const user = {
  firstName: "Luke",
  lastName: "Skywalker",
  age: 19,
  isJedi: true,
};
```
Then to access the value of an object property, we can call the object name then a period followed by the property name. Example :
```javascript
const user = {
  firstName: "Luke",
  lastName: "Skywalker",
  age: 19,
  isJedi: true,
};

console.log(`Hello, my name is ${user.firstName} ${user.lastName}`);
console.log(`My age is ${user.age} years`);
```
Output : 
```
Hello, my name is Luke Skywalker
I am 19 years
```
Apart from the dot operator, we can also access object properties using brackets or square brackets.
```javascript
user[“home world”];
```
To access keys that have spaces or other special characters, we need to use brackets as above.
```javascript
const user = {
 firstName: "Luke",
 lastName: "Skywalker",
 age: 19,
 isJedi: true,
 "home world": "Tattooine"
};

console.log(`Hello, my name is ${user.firstName} ${user.lastName}`);
console.log(`My age is ${user.age} years`);
console.log(`I come from ${user["home world"]}`);
```
Output : 
```
Hello, my name is Luke Skywalker
I am 19 years old
I come from Tattooine
```

You can explore more about Object in [3.1.1-Objectbasicexplanation.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%203%20-%20Data%20Structure/3.1.1-Objectbasicexplanation.js)

#### 3.1.2 Modify Propeties Object

After learning how to create objects and display properties in them, next we will modify an object. To change property values in objects we use the assignment operator (=).

```javascript
const spaceship = {
  name: "Millenium Falcon",
  manufacturer: "Corellian Engineering Corporation",
  maxSpeed: 1200,
  color: "Light gray"
};

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
console.log(spaceship);
```
Output : 
```
{
  name: 'Millenium Falcon',
  manufacturer: 'Corellian Engineering Corporation',
  maxSpeed: 1300,
  color: 'Glossy red'
}
```
If you realize why the value in an object can be changed even though the declaration uses constant, that's because we change the value differently by reinitializing the value. When creating an object, we are not tied to the properties in it so we can still modify its values. It's different if we reinitialize the variables from the object.
```javascript
const spaceship = {
  name: "Millenium Falcon",
  manufacturer: "Corellian Engineering Corporation",
  maxSpeed: 1200,
  color: "Light gray"
};
 
spaceship = { name: "New Millenium Falcon" }; // Error
```
When we change an object using the assignment operator and the property/key already exists, the value in it will be replaced with the new value. Meanwhile, if a property with the specified key name is not found, a new property will be added to the object.

You can explore more about Modify Propeties Objects in [3.1.2-Modifypropertiesobject.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%203%20-%20Data%20Structure/3.1.2-Modifypropertiesobject.js)

#### 3.1.3 Delete Properties on Object

We can also delete properties on objects using the delete keyword as follows : 
```javascript
const spaceship = {
  name: "Millenium Falcon",
  manufacturer: "Corellian Engineering Corporation",
  maxSpeed: 1200,
  color: "Light gray"
};

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;

delete spaceship.manufacturer;

console.log(spaceship);
```
Output : 
```
{ name: 'Millenium Falcon', maxSpeed: 1300, color: 'Glossy red' }
```

You can explore more about Delete Properties Objects in [3.1.3-Deletepropertiesobject.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%203%20-%20Data%20Structure/3.1.3-Deletepropertiesobject.js)

### 3.2 Array

#### 3.2.1 Basic Explanation of Array

An array is a data type that can group more than one value and place it in one variable. Example :
```javascript
let myArray = ["Chocolate", 42.5, 22, true, "Programming"];
console.log(myArray);
```
Output : 
```
[ 'Chocolate', 42.5, 22, true, 'Programming' ]
```

The difference between an array and an object is that the data in the array is arranged sequentially and accessed using an index. To access values in an array, we use square brackets "[ ]" which contain the number which is the position of the value we want to access.
```javascript
let myArray = ["Chocolate", 42.5, 22, true, "Programming"];
console.log(myArray[1]);
```
Output :
```
42.5
```
> *The reason why what comes out is "42.5" not "Chocolate" is because in an array if it is not set, the index will start from 0, like the previous concept when for the for loop.*

Then, what will happen if we try to access an index outside the array size? If we access an array value more than its index, the result will be undefined. The last index of an array is always the sum of the array values  1.

```javascript
let myArray = ["Chocolate", 42.5, 22, true, "Programming"];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);
console.log("Panjang nilai myArray adalah " + myArray.length + ".");
```
Output : 
```
Cokelat
42.5
22
true
Programming
undefined
Panjang nilai myArray adalah 5.
```

You can explore more about Array in [3.2.1-Arraybasicexplanation.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%203%20-%20Data%20Structure/3.2.1-Arraybasicexplanation.js)

#### 3.2.2 Add Data to Last Index in Array

Ok, now to add data to the array in the last index, do this by : 

```javascript
const myArray = ["Chocolate", 42.5, 22, true, "Programming"];

myArray.push('JavaScript');
console.log(myArray);
```
Output : 
```
[ 'Chocolate', 42.5, 22, true, 'Programming', 'JavaScript' ]
```
You can explore more about Add Data to Last Index in Array in [3.2.2-Adddatatolastindexinarray.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%203%20-%20Data%20Structure/3.2.2-Adddatatolastindexinarray.js)

#### 3.2.3 Remove Last Index Array Data

Meanwhile, to remove the last data or element from the array, we can use the "pop()" method.
```javascript
const myArray = ["Chocolate", 42.5, 22, true, "Programming"];

myArray.pop();
console.log(myArray);
```
Output : 
```
[ Chocolate, 42.5, 22, true ]
```

You can explore more about Remove Last Index Array Data in [3.2.3-Removelastindexrraydata.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%203%20-%20Data%20Structure/3.2.3-Removelastindexrraydata.js)

#### 3.2.4 Manipulate Array Data Using Shift & Unshift

Another method that we can use to manipulate data in an array is "shift"() and "unshift()". The "shift()" method is used to remove the first element from the array, while "unshift()" is used to add an element to the beginning of the array.
```javascript
const myArray = ["Chocolate", 42.5, 22, true, "Programming"];

myArray.shift();
myArray.unshift("Apple");

console.log(myArray);
```
Output : 
```
[ 'Apple', 42.5, 22, true, 'Programming' ]
```

You can explore more about Manipulate Array Data Using Shift & Unshift in [3.2.4-Shift&unshift.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%203%20-%20Data%20Structure/3.2.4-Shift%26unshift.js)

#### 3.2.5 Delete Data Array Based on Index 

To delete data array based on index, use like this example :
```javascript
const myArray = ["Chocolate", 42.5, 22, true, "Programming"];

delete myArray[1];
console.log(myArray);
```
Output : 
```
[ 'Chocolate', <1 empty item>, 22, true, 'Programming' ]
```
However, note here that the delete keyword only deletes data at the specified index and then leaves that position empty. To remove elements, use the "splice()" method like this : 

```javascript
const myArray = ["Chocolate", 42.5, 22, true, "Programming"];

myArray.splice(2, 1);   // Removes 1 element from index 2
console.log(myArray);
```
Output : 
```
[ 'Chocolate', 42.5, true, 'Programming' ]
```
Apart from deleting elements in an array, "splice()" can also be used to add elements to the array. The method is to provide the 3rd (or subsequent, variadic) argument as the value that will be included in the index given in the first argument.
```javascript
const month = ['January', 'March', 'April', 'May'];
console.log('before splice: ', month);

month.splice(1, 0, 'February');
console.log('after splice: ', month);
```
Output : 
```
before splice:  [ 'January', 'March', 'April', 'May' ]
after splice:  [ 'January', 'February', 'March', 'April', 'May' ]
```

You can explore more about Delete Data Array Based on Index in [3.2.5-Deletedataarraybasedonindex.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%203%20-%20Data%20Structure/3.2.5-Deletedataarraybasedonindex.js)

### 3.3 Spread Operator

In JavaScript there is a feature with Arrays, namely Spread Operator. As the name suggests "spread", this feature is used to spread array values or more precisely iterable objects into several elements. The spread operator is written with three dots (...). Let's look at the following code example : 

```javascript
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
console.log(favorites);
```
Output : 
```
[ 'Seafood', 'Salad', 'Nugget', 'Soup' ]
```

The spread operator works like combining array values into several elements according to the length of the array value. So if we write code like this :- 

```javascript
console.log(...favorites);
```
Just as we write code like this : 
```javascript
console.log(favorites[0], favorites[1], favorites[2], favorites[3]);
```
The spread operator can be used to combine two arrays into a new array. If you don't use this spread operator the results will be like this : 

```javascript
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [favorites, others];

console.log(allFavorites);
```
Output : 
```
[
  [ 'Seafood', 'Salad', 'Nugget', 'Soup' ],
  [ 'Cake', 'Pie', 'Donut' ]
]
```
Array values will not be combined. Instead of concatenating the values, the allFavorites variable becomes a new array that holds two arrays within it. Let's try with Spread Operator : 

```javascript
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [...favorites, ...others];

console.log(allFavorites);
```
Output : 
```
[ 'Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donut' ]
```
By using the spread operator the values of the two arrays are successfully combined.

Apart from arrays, the spread operator can also be used for object literals. This allows us to combine several objects with more concise code.

```javascript
const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };

const newObj = { ...obj1, ...obj2 };

console.log(newObj);
```
Output : 
```
{ firstName: 'Obi-Wan', age: 30, lastName: 'Kenobi', gender: 'M' }
```

You can explore more about Delete Data Array Based on Index in [3.3-Spreadoperator.js]()

### 3.4 Destructuring Object & Array

Object and array iteration are two of the most widely used things in managing data in JavaScript. JSON (JavaScript Object Notation) is the most popular data format used in data transactions today.

```json
[
  {
    "id": 14,
    "title": "Belajar Fundamental Aplikasi Android",
    "author": "Google ATP"
  },
  {
    "id": 51,
    "title": "Belajar Membuat Aplikasi Android untuk Pemula",
    "author": "Google ATP"
  },
  {
    "id": 123,
    "title": "Belajar Dasar Pemrograman Web",
    "author": "Dicoding Indonesia"
  },
  {
    "id": 163,
    "title": "Belajar Fundamental Front-End Web Development",
    "author": "Dicoding Indonesia"
  }
]
```

Based on the above, we can conclude that the structure is built from arrays and objects. Because these two things are widely used to manage data in JavaScript to make things easier for developers, ES6 adds features for destructuring objects and arrays.

Destructuring in JavaScript is a syntax that can output values from an array or properties of an object into smaller units.

Unconsciously, maybe we have done destructuring. However, before ES6 it was done like this : 

```javascript
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}

const firstName = profile.firstName
const lastName = profile.lastName
const age = profile.age

console.log(firstName, lastName, age)
```
Output : 
```
John Doe 18
```

Look at the code above, the code extracts the value in the object, then stores it in a local variable with the same name as the property in the object profile. Maybe extracting values from an object with this step looks easy, but imagine if the object had lots of properties and you had to do it manually one by one. Too much code written over and over again, right?

That's the reason ES6 adds features that make it easier for us to destructuring objects and arrays. When we want to break down the data structure into smaller parts, it will be easier for us to get the desired data.

For Example about Destructuring Object & Array you can open the code in [3.4-DestructuringObject&Array.js]()

### 3.5 Destructuring in Object

#### 3.5.1 Destructuring Object

Writing destructuring object syntax in ES6 uses an object literal "{}" on the left side of the assignment operator.

```javascript
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}

const { firstName, lastName, age } = profile;
console.log(firstName, lastName, age);
```
Output : 
```
John Doe 18
```

In the example above the curly brackets represent the object to be destructured. It contains firstName, lastName, and age which are variables to store property values of the profile object. We also need to pay attention to the naming of the variables. Make sure the name is the same as the object property. It is through this variable name that object property values will be entered automatically. So the firstName variable will contain the profile.firstName value, lastName will contain the profile.lastName value, likewise the age variable will contain the profile.age value.

In destructuring an object, we can determine one of the values that we want to destructurize. So we don't need to create as many variables as the properties the object has, for example : 
```javascript
const { lastName } = profile;
```

For Example about Destructuring Object & Array you can open the code in [3.5.1-Destructuringobject.js]()

#### 3.5.2 Destructuring Assignment

In the previous example, we have destructured the object in the variable declaration. However, in certain cases we may need to do this on variables that have already been declared.
```javascript
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}

let firstName = "Dimas";
let age = 20;

// initialize new value via destructuring object
({ firstName, age } = profile);

console.log(firstName);
console.log(age);
```
Output : 
```
John
18
```

When doing a destructuring assignment, we need to write the destructuring object in brackets. If you don't write brackets, the curly braces will make JavaScript think we are making a block statement, while the block statement cannot be on the left side of the assignment.
```javascript
// can't because JavaScript thinks we are making a block statement
// block statements cannot be on the left side of the assignment
{ firstName, age } = profile;
```
Well, this is the function of brackets. It will tell JavaScript that the curly marks in it are not a block statement but an expression, so assignments can be carried out.
```
({ firstName, age } = profile);
```

For Example about Destructuring Assignment you can open the code in [3.5.2-Destructuringassignment.js]()

#### 3.5.3 Default Values

When we destruct an object and assign a variable with a name that is not a property of the object, the value of the variable becomes undefined. For example : 
```javascript
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 
 
const { firstName, age, isMale } = profile;
 
console.log(firstName)
console.log(age)
console.log(isMale)
```
Output : 
```
John
18
undefined
```

Alternatively, we can optionally define a default value on a particular property if it is not found. To do this, add an assignment sign (=) after the variable name and set its default value like this : 

```javascript
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 
 
const { firstName, age, isMale = false } = profile;
 
console.log(firstName)
console.log(age)
console.log(isMale)
```
Output : 
```
John
18
false
```
If the property value is not found, then the default value is applied to the variable.

For Example about Default Values Destructuring Object you can open the code in [3.5.3-Defaultvaluesdestructuringobject.js]()

#### 3.5.4 Assigning to Different Local Variable Names

Until now we know that to carry out object destructuring on local variables, we need to standardize the naming of local variables with their object properties. However, actually in the object destructuring process we can use different local variable names. ES6 provides additional syntax that allows us to do this. The writing is similar to when we create properties and their values on objects.

Examples like this : 

```javascript
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 
const { firstName: localFirstName, lastName: localLastName, age: localAge } = profile;
 
console.log(localFirstName);
console.log(localLastName);
console.log(localAge);
```
Output : 
```
John
Doe
18
```
   
For Example about Assigning to Different Local Variable Names you can open the code in [3.5.4-Assigningtodifferentlocalvariablenames.js]()

### 3.6 Destructuring in Array

#### 3.6.1 Destructuring Array

Destructuring arrays is similar to destructuring objects. Objects use curly brackets "{ }" while arrays use square brackets "[ ]". Another difference is that destructuring arrays works based on position rather than naming their properties. Here's an example of destructuring an array in ES6 : 

```javascript
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
 
console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);
```
Output : 
```
Seafood
Salad
Nugget
Soup
```

The code above is an example of the array destructuring process. In the favorites array there are 4 (four) string values, each of which is entered into the local variables firstFood, secondFood, thirdFood, and fourthFood. The value of the array assigned to a local variable is chosen based on the position where it is declared in the array.

```javascript
const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
```

Actually, we are free to determine the name of the local variable. The most important thing is the order in which the variables are declared.

We can also choose values at certain indexes for destructuring the array. For example, if we want to get the third value from an array, we don't need to set up a local variable to hold the first, second, or fourth array value. We can do this by leaving the array indexes we don't want empty (without writing local variables). Furthermore, a comma (,) is still needed to indicate the index position like this:

```javascript
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
const [ , , thirdFood ] = favorites;
 
console.log(thirdFood);
```
Output : 
```
Nugget
```

For Example about Destructuring Array you can open the code in [3.6.1-Destructuringarray.js]()

#### 3.6.2 Destructuring Assignment

Kita juga bisa melakukan destructuring assignment pada array. Namun, tidak seperti object, kita tidak perlu membungkusnya dengan tanda kurung. Contohnya seperti berikut : 
```javascript
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
let myFood = "Ice Cream";
let herFood = "Noodles";
 
[myFood, herFood] = favorites;
 
console.log(myFood);
console.log(herFood);
```
Output : 
```
Seafood
Salad
```

Array destructuring assignment is very useful when we want to exchange values between two variables. Before ES6, to do this we used the manual method using an algorithm like this : 

```javascript
var a = 1;
var b = 2;
var temp;
 
console.log("Before swap");
console.log("Value a: " + a);
console.log("Value b: " + b);
 
temp = a;
a = b;
b = temp;
 
console.log("After swap");
console.log("Value a: " + a);
console.log("Value b: " + b);
```
Output : 
```
Before swap
Value a: 1
Value b: 2
After swap
Value a: 2
Value b: 1
```

To carry out a value exchange, we need an intermediary variable. In the code example above, the temp variable is used. Intermediate variables are needed to store temporary data on the variables to be exchanged. This becomes less effective because we have to create new variables which are actually only temporary.

With array destructuring assignment, we can swap variable values easily without creating additional variables.

```javascript
let a = 1;
let b = 2;

console.log("Before swap");
console.log("Value of a: " + a);
console.log("Value of b: " + b);

[a, b] = [b, a] // sets the value of a to the value of b and the value of b to the value of a.

console.log("After swap");
console.log("Value of a: " + a);
console.log("Value of b: " + b);
```
Output : 
```
Before swap
Value a: 1
Value b: 2
After swap
Value a: 2
Value b: 1
```

For Example about Destructuring Assignment Array you can open the code in [3.6.2-Destructuringassignmentarray.js]()

#### 3.6.3 Default Values

When destructuring an array, but there is a variable whose position cannot be reached by the array, then that variable will have the value undefined. For example : 

```javascript
const favorites = ["Seafood"];
const [myFood, herFood] = favorites
 
console.log(myFood);
console.log(herFood);
```
Output : 
```
Seafood
undefined
```

Just like objects, in destructuring arrays we can also give default values to variables that cannot be reached by arrays, so that the value of the variable will not become undefined.

```javascript
const favorites = ["Seafood"];
 
const [myFood, herFood = "Salad"] = favorites
 
console.log(myFood);
console.log(herFood);
```
Output : 
```
Seafood
Salad
```

For Example about Default Value Destructuring Array you can open the code in [3.6.3-Defaultvaluedestructuringarray.js]()

### 3.7 Map

Map is a data type that stores a collection of data in a key-value format like an object. The difference is that Map allows keys with any data type, compared to Object which only allows keys of type String or Symbol.

To define a Map, use the constructor as below : 

```javascript
const myMap = new Map();
```

If you want to determine the value of the Map directly, use a multi-dimensional array like this : 

```javascript
const myMap = new Map([
  ['1', 'a String key'],
  [1, 'a number key'],
  [true, true]
]);

console.log(myMap)
```
Output : 
```
Map(3) { '1' => 'a String key', 1 => 'a number key', true => true }
```

The first array (which is outside) functions to store each element or key-value pair of the Map. Then the array inside has two elements, where the first element is the key and the second element is the value.

When we have created a Map object, we can get its value based on a certain key using the get() method. Then, to add a new key-value pair use the set() method.

```javascript
const capital = new Map([
  ["Jakarta", "Indonesia"],
  ["London", "England"],
  ["Tokyo", "Japan"]
]);

console.log(capital.size);
console.log(capital.get("London"));
capital.set("New Delhi", "India");
console.log(capital.size);
console.log(capital.get("New Delhi"));
```
Output : 
```
3
England
4
India
```
For Example about Default Value Destructuring Array you can open the code in [3.7-Map.js]()

### 3.8 Set

The data structure we will discuss next is Set. A simple set is a collection of values set of values). The thing that differentiates Sets from other data structures is that the data in Sets is not ordered and is not indexed. Apart from that, the data in the Set is also unique and there is no duplication. Take a look at the example Set declaration below : 

```javascript
const numberSet = new Set([1, 4, 6, 4, 1]);

console.log(numberSet);
```
Output : 
```
Set(3) { 1, 4, 6 }
```

In the code above there are several duplicate numbers, namely numbers 1 and 4. Set will automatically discard the same numbers, so the stored values are {1, 4, 6}.

To add data to a Set we can use the add() function.
```javascript
const numberSet = new Set([1, 4, 6, 4, 1]);
numberSet.add(5);
numberSet.add(10);
numberSet.add(6);

console.log(numberSet);
```
Output : 
```
Set(5) { 1, 4, 6, 5, 10 }
```

The add() function accepts only one argument. If you enter an array, then the array will be treated as one of its own elements. Duplicate values will be ignored.

```javascript
const numberSet = new Set([1, 4, 6, 4, 1]);
numberSet.add(5);
numberSet.add(10);
numberSet.add(6);

numberSet.delete(4);

console.log(numberSet);
```
Output : 
```
Set(4) { 1, 6, 5, 10 }
```

Remember that Set has no order or index, so the argument entered into the delete function is the value you want to delete, not the index.

For Example about Default Value Destructuring Array you can open the code in [3.8-Set.js]()

### 3.9 WeakMap & WeakSet

WeakMap is a variant of Map that supports garbage collection. Garbage collection is a process in which the JavaScript interpreter reclaims memory that is no longer “reachable” and cannot be used by the program [3]. Garbage collection in JavaScript is done automatically and is not the developer's business.

What is meant by weak in WeakMap is a reference to the stored value. If a value stored in WeakMap is no longer accessible or can no longer be accessed, the reference to its memory will be deleted.

The following are several things that differentiate between Map and WeakMap:

- The WeakMap key must be an object or array. Primitive values cannot be used as keys because they do not support garbage collection.
- WeakMap has get(), set(), has(), and delete() methods. However, WeakMap does not fall into the iterable category so it does not have the keys(), values(), or forEach() methods.
- WeakMap also does not have a size property. This is because the size of the WeakMap can change due to the garbage collection process.

Still confused? Let's look at a code example and the differences between Map and WeakMap.

```javascript
const visitsCountMap = new Map(); // Save a list of users

function countUser(user) {
 let count = visitsCountMap.get(user) || 0;
 visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas); // Add user "Jonas"

jonas = null; // Data object "Jonas" is deleted

// delay is needed to wait for the garbage collector to work
setTimeout(function() {
 console.log(visitCountMap);
}, 10000)
```
Output : 
```
Map(1) { { name: 'Jonas' } => 1 }
```
> *setTimeout is a function that is used to delay the execution of the code contained in it until a specified time period. The setTimeout function will be discussed in detail in the concurrency module.*

When the Jonas object reference is deleted by changing it to null, the map should no longer store user data (garbage collected). However, in reality Jonas data is still available in the map. This means that Jonas data is still stored in memory until we completely delete it.

It's different if we use WeakMap like this.

```javascript
const visitsCountMap = new WeakMap();
```
When the jonas value can no longer be reached, the jonas object will be deleted from memory including the information stored in the WeakMap.
```javascript
const { inspect } = require('util');

const visitsCountMap = new WeakMap(); // Save a list of users

function countUser(user) {
 let count = visitsCountMap.get(user) || 0;
 visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas); // Add user "Jonas"

jonas = null; // Data object "Jonas" is deleted

// delay is needed to wait for the garbage collector to work
setTimeout(function() {
 console.log(inspect(visitsCountMap, { showHidden: true }));
}, 10000);
```
Output : 
```
  WeakMap {  }
```
> *WeakMap cannot be viewed directly using console.log. This is an issue that occurs in Node.js (see: https://github.com/nodejs/node/issues/19001). That's why we use the inspect function to see the data in WeakMap.*

> *If the output results do not match what is expected in the code, it is caused by insufficient waiting time to show how the garbage collector works. Please see the explanation in the following discussion: https://www.dicoding.com/academies/256/discussions/156523*

Like WeakMap, WeakSet is a weak reference version of Set. The differences between WeakSet and Set include:

- WeakSet cannot store primitive values.
- WeakSet is not an iterable and only has add(), has(), and delete() methods.
- WeakSet does not have a size property

For Example about Default Value Destructuring Array you can open the code in [3.9-Weakmap&weakset.js]()

### 3.10 Coding Quiz : Object

To test practical skills in understanding Object in JavaScript, let's complete the following quiz.

To do : 
```
1. Create a variable with the name of the restaurant of type object with the following conditions:
 - Has a property called "name"
     - String data type
     - Worth "Mang Dicoding Meatballs".
 - Has a property called "city"
     - String data type
     - Valued "Bandung".
 - Has the "favorite drink" property
     - String data type
     - Worth "Iced Tea".
 - Has the "favorite food" property
     - String data type
     - Worth "Meatballs".
 - Has the "isVegan" property
     - Boolean data type
     - Values false.
2. Create a variable called name.
 Then fill in the name value from the restaurant object property
3. Create a variable called favoriteDrink.
 Then fill in the "favorite drink" value from the restaurant object property
```
Answer code : 
```javascript
let restaurant = {
	name : "Mang Dicoding Meatballs",
  	city : "Bandung",
  	"favorite drink" : "Iced Tea",
  	"favorite food" : "Meatballs",
  	isVegan : false
}

let name = restaurant.name
let favoriteDrink = restaurant["favorite drink"]
```
Optional code : 
```javascript
console.log(restaurant);
console.log(name);
console.log(favoriteDrink);
```
Output : 
```

```
For source code explore in [3.10-Quizcodingobject.js]()

### 3.11 Coding Quiz : Array

To test practical skills in understanding Array in JavaScript, let's complete the following quiz.

To do : 
```
Create a variable with the name evenNumber which is an array with the following conditions:
 - The array holds even numbers from 1 to 100

Notes:
 - To make it easier, use a for loop and if logic to fill in even numbers in the array.
```
Answer code : 
```javascript
let evenNumber = [];
let i = 1;

while (i <= 100) {
  	if (i % 2 == 0) {
    	evenNumber.push(i);
    }
	i++; 
}
```
Optional code : 
```javascript
console.log(evenNumber);
```
Output : 
```

```
For source code explore in [3.11-Quizcodingarray.js]()

### 3.12 Coding Quiz : Map

To test practical skills in understanding Map in JavaScript, let's complete the following quiz.

To do  : 
```
1. Create a currency variable which is a map with the following criteria:
 - key "USD", value 14000
 - key "JPY", value 131
 - key "SGD", value 11000
 - key "MYR", value 3500
2. Create a priceInIDR variable whose value is the result of the multiplication:
 - priceInJPY with JPY currency value
```
Code from Dicoding : 
```javascript
const priceInJPY = 5000;
```
Answer code : 
```javascript
let currency = new Map([
  ['USD', 14000],
  ['JPY', 131],
  ['SGD', 11000],
  ['MYR', 3500]
]);

let priceInIDR = priceInJPY * currency.get("JPY")
```
Output : 
```

```
For source code explore in [3.12-Quizcodingmap.js]()