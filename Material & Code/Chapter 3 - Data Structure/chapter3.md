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
