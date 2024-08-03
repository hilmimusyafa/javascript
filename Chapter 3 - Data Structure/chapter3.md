## Chapter 3 : Data Structure

### 3.1 Object

#### 3.1.1 Basic Explanation of Object

Object is a data type that stores a lot of data in one place (the object itself) with various other data types, making the data more complex. Easy assign to object with use "{}", like this code : 
```javascript
const user = {};
```
Objects contain key and value pairs which are also known as properties. Keys is like variable names that store a value, and value is literally value with any data type. Here's the format :
```javascript
let object = {key1: "value1", key2: "value2"}
```
The key must be a string and written before the colon (:), then followed by the value. Even though the key is a string, we don't need to write quotation marks unless there are special characters such as spaces.

One object can have several key-value pairs separated by commas (,).
```javascript
let character = {firstName: "Bronya", lastName: "Rand", idUser: 0009, fullAcess: true, location: "Central Belobog"};
```
And it is better to differentiate each line so that we don't have difficulty reading.
```javascript
let user = {
    firstName: "Bronya", 
    lastName: "Rand",
    idUser : 10009, 
    fullAcess: true, 
    location: "Central Belobog"
};
```
Here some explanation : 
![Tambahkan sedikit teks isi (2)](https://hackmd.io/_uploads/SyIXATYKC.png)
For example we will call the object data :
```javascript
let user = {
    firstName: "Bronya", 
    lastName: "Rand",
    idUser : 10009, 
    fullAcess: true, 
    location: "Central Belobog"
};

console.log(`Hello, my name is ${user.firstName} ${user.lastName}`);
```
Output : 
```
Hello, my name is Bronya Rand
```
Apart from the dot operator, we can also access object properties using brackets or square brackets.
```javascript
user[“home world”];
```
You can add space if use brackets, like this one :
```javascript
let user = {
    firstName: "Bronya", 
    lastName: "Rand",
    idUser : 10009, 
    fullAcess: true, 
    location: "Central Belobog",
    "Division Work": "Leader"
};

console.log(`Hello, my name is ${user.firstName} ${user.lastName}`);
console.log(`I work in ${user["Division Work"]} division`);
```
Output : 
```
Hello, my name is Bronya Rand
I work in Leader division
```
You can explore more about Object in [3.1.1-Objectbasicexplanation.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%203%20-%20Data%20Structure/3.1.1-Objectbasicexplanation.js)

#### 3.1.2 Modify Object

##### 1. Modify Properties Object

Okey, next we will modify an object. To change property values in objects we use the assignment operator (=).

```javascript
const user = {
    firstName: "Bronya", 
    lastName: "Rand",
    idUser : 10009, 
    fullAcess: true, 
    location: "Central Belobog"
};

user.lastUpdate = "10/9/2024";
console.log(user);
```
Output : 
```
{
    firstName: "Bronya", 
    lastName: "Rand",
    idUser : 0009, 
    fullAcess: true, 
    location: "Central Belobog"
    lastUpdate = "10/9/2024";
}
```
Changing the value of a constant is fine, what cannot be done is changing it directly by recreating the variable or constant with the same name, as below:
```javascript
const user = {
    firstName: "Bronya", 
    lastName: "Rand",
    idUser : 10009, 
    fullAcess: true, 
    location: "Central Belobog"
};

user = { lastUpdate : "10/9/2024" }; // Error
```
If it turns out that nothing has been replaced, it will be added automatically/

#### 2. Delete Properties on Object

We can also delete properties on objects using the delete keyword as follows : 
```javascript
let user = {
    firstName: "Bronya", 
    lastName: "Rand",
    idUser : 10009, 
    fullAcess: true, 
    location: "Central Belobog",
};

delete user.location;

console.log(user);
```
Output : 
```
{ firstName: "Bronya", lastName: "Rand", idUser : 0009, fullAcess: true }
```

You can explore more about Modifying Objects in [3.1.2-Modifyingobject.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%203%20-%20Data%20Structure/3.1.2-Modifypropertiesobject.js)

### 3.2 Array

#### 3.2.1 Basic Explanation of Array

An array is a data type that can group more than one value and place it in one variable. Example :
```javascript
let datatype = ["String", 22, 9.8, true];
console.log(datatype);
```
Output : 
```
[ 'String', 22, 9.8, true ]
```
The difference between an array and an object is that the data in the array is arranged sequentially and accessed using an index. To access values in an array, we use square brackets "[ ]" which contain the number which is the position of the value we want to access.
```javascript
let movie = ["Big Hero 6", 9.7, true, "Cartoon"];
console.log(movie[1]);
```
Output :
```
9.7
```
> *The reason why what comes out is "9.7" not "Big Hero 6" is because in an array if it is not set, the index will start from 0, like the previous concept when for the for loop.*

If the array member is not written, it will automatically enter the undefined data type, the proof is below:
```javascript
let movie = ["Big Hero 6", 9.7, true, "Cartoon"];
console.log(movie[0]);
console.log(movie[1]);
console.log(movie[2]);
console.log(movie[3]);
console.log(movie[4]);
```
Output : 
```
Big Hero 6
9.7
true
Cartoon
undefined
```

You can explore more about Array in [3.2.1-Arraybasicexplanation.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%203%20-%20Data%20Structure/3.2.1-Arraybasicexplanation.js)

#### 3.2.2 Modifying Array

##### 1. Modifying using Shift & Unshift

To manipulate data in an array it can use "shift"() and "unshift()". The "shift()" method is used to remove the first element from the array, while "unshift()" is used to add an element to the beginning of the array.
```javascript
let movie = ["Big Hero 6", 9.7, true, "Cartoon"];

movie.shift();
console.log(movie);

movie.unshift("UP");
console.log(movie);
```
Output : 
```
[ 9.7, true, 'Cartoon' ]
[ 'UP', 9.7, true, 'Cartoon' ]
```

##### 2. Add Data to Last Index in Array

Ok, now to add data to the array in the last index, do this by : 

```javascript
let movie = ["Big Hero 6", 9.7, true, "Cartoon"];

movie.push('Disney');
console.log(movie);
```
Output : 
```
[ 'Big Hero 6', 9.7, true, 'Cartoon', 'Disney' ]
```

##### 3. Remove Last Index Array Data

Meanwhile, to remove the last data or element from the array, we can use the "pop()" method.
```javascript
let movie = ["Big Hero 6", 9.7, true, "Cartoon"];

movie.pop();
console.log(movie);
```
Output : 
```
[ 'Big Hero 6', 9.7, true, 'Cartoon' ]
```

##### 4. Delete Data Array Based on Index 

To delete data array based on index, use like this example :
```javascript
let movie = ["Big Hero 6", 9.7, true, "Cartoon"];

delete movie[1];
console.log(movie);
```
Output : 
```
[ 'Big Hero 6', <empty>, true, 'Cartoon' ]
```
However, note here that the delete keyword only deletes data at the specified index and then leaves that position empty. To remove elements, use the "splice()" method like this : 

```javascript
let movie = ["Big Hero 6", 9.7, true, "Cartoon"];

movie.splice(1, 1); // Removes 1 element from index 1
console.log(movie);
```
Output : 
```
[ 'Big Hero 6', true, 'Cartoon' ]
```
"splice()" can also be used to add elements to the array. Here's the method :
```javascript
let movie = ["Big Hero 6", 9.7, true, "Cartoon"];
console.log('before splice: ', movie);

movie.splice(1, 0, 2017);
console.log('after splice: ', movie);
```
Output : 
```
before splice:  [ 'Big Hero 6', 9.7, true, 'Cartoon' ]
after splice:  [ 'Big Hero 6', 2017, 9.7, true, 'Cartoon' ]
```

You can explore more about Modifying Array in [3.2.2-Modifyingarray.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%203%20-%20Data%20Structure/3.2.5-Deletedataarraybasedonindex.js)


### 3.3 Spread Operator

The spread operator (...) allows you to spread the elements of an array or iterable object into individual elements, let's try with this 2 array: 
```javascript
const astralExpress = ["Himeko", "Welt ", "Dan Heng", "March7th", "Caelus"];
let visitor = ["Asta", "Herta", "Arlan", "Ruan Mei"]
```
If we output as usual, then the 2 arrays will definitely be separated, as below : 
```javascript
const astralExpress = ["Himeko", "Welt ", "Dan Heng", "March7th", "Caelus"];
let visitor = ["Asta", "Herta", "Arlan", "Ruan Mei"]

console.log(astralExpress, visitor)
```
Output : 
```
[ 'Himeko', 'Welt ', 'Dan Heng', 'March7th', 'Caelus' ] 
[ 'Asta', 'Herta', 'Arlan', 'Ruan Mei' ]
```
See? its still is seperated, and that's why in this case will use Spread Operator, just add (...) in behind of array name : 
```javascript
const astralExpress = ["Himeko", "Welt", "Dan Heng", "March7th", "Caelus"];
let visitor = ["Asta", "Herta", "Arlan", "Ruan Mei"]

console.log(...astralExpress, ...visitor)
```
Output : 
```
Himeko Welt Dan Heng March7th Caelus Asta Herta Arlan Ruan Mei
```
And boom, its combined no, yeah because spread operator is work like this :
```javascript
console.log(astralExpress[0], astralExpress[1], astralExpress[2], astralExpress[3]) //etc.. until the array is empty;
```
It can work in object to :
```javascript
const user = { name: 'Himeko', age: 30 };
const obj2 = { gender: 'F', from: 'Astral Express' };

const newObj = { ...obj1, ...obj2 };

console.log(newObj);
```
Output : 
```
{ name: 'Himeko', age: 30, gender: 'F', from: 'Astral Express' }
```

You can explore more about Delete Data Array Based on Index in [3.3-Spreadoperator.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%203%20-%20Data%20Structure/3.3-Spreadoperator.js)

### 3.4 Destructuring Object & Array

Destructuring is a convenient way of extracting multiple values from data stored in (possibly nested) objects and arrays. It allows for cleaner and more concise code when working with object properties.

#### 3.4.1 Destructuring Object

##### 1. Basic Syntax 

Writing destructuring object syntax just uses an object literal "{}" on the left side of the assignment operator. Here the basic syntax : 
```javascript
const profile = {
    firstName: "Bronya",
    lastName: "Rand",
    age: 30
}

const { firstName, lastName, age } = profile;
console.log(firstName, lastName, age);
```
Output : 
```
John Doe 18
```

##### 2. Assigning to Diffrent Variables

You can also assign properties to new variable names using a colon (:).

```javascript
const profile = {
    firstName: "Bronya",
    lastName: "Rand",
    age: 30
}
const { firstName: personFirstName, lastName: personLastName, age: personAge } = profile;

console.log(personFirstName, personLastName); 
console.log(personAge);
```
Output : 
```
Bronya Rand
30
```
##### 3. Default Values

When we destruct an object and assign a variable with a name that is not a property of the object, the value of the variable becomes undefined. For example : 
```javascript
const profile = {
    firstName: "Bronya",
    lastName: "Rand",
    age: 30
}
 
const { firstName, lastName, age } = profile;
 
console.log(firstName, lastName)
console.log(isMale)
```
Output : 
```
Bronya Rand
undefined
```
Alternatively, we can optionally define a default value on a particular property if it is not found. To do this, add an assignment sign (=) after the variable name and set its default value like this : 
```javascript
const profile = {
    firstName: "Bronya",
    lastName: "Rand",
    age: 30
}
 
const { firstName, lastName, isMale = false } = profile;
 
console.log(firstName, lastName)
console.log(isMale)
```
Output : 
```
Bronya Rand
false
```
If the property value is not found, then the default value is applied to the variable.

##### 4. Nested Object Destructuring

Destructuring can be used to extract properties from nested objects as well.

```javascript
const profile = {
    firstName: "Bronya",
    lastName: "Rand",
    age: 30,
    address: {
    city: 'Belobog',
    zip: 10001
  }
}
 
const { firstName, lastName, address: { city, zip } } = profile;
 
console.log(firstName, lastName);
console.log(city);
```
Output : 
```
Bronya Rand
Belobog
```

You can explore more about Destructuring Object in [3.4.1-Destructuringobject.js]()

#### 3.4.2 Destructuring Array

##### 1. Basic Syntax

Destructuring arrays allows you to unpack values from arrays into distinct variables. This makes your code more readable and concise. Is just literally like object, but in array is based on index location : 

```javascript
const astralExpress = ["Himeko", "Welt", "Dan Heng", "March7th", "Caelus"];
const [pOne, pTwo, pThree] = astralExpress;

console.log(pOne); 
console.log(pTwo); 
console.log(pThree); 
```
Output : 
```
Himeko
Welt
Dan Heng
```
Same like in destrcturing object, data will sorted to new variable.

##### 2. Skipping Elements 

Skip elements in the array by leaving gaps in the destructuring assignment.
```javascript
const astralExpress = ["Himeko", "Welt", "Dan Heng", "March7th", "Caelus"];
const [pOne, , pThree] = astralExpress;

console.log(pOne); 
console.log(pThree); 
```
Output : 
```
Himeko
Dan Heng
```

##### 3. Default Values

Same like in object, default values in array is undefined : 
```javascript
const astralExpress = ["Himeko", "Welt"];
const [pOne, pTwo, pThree] = astralExpress;

console.log(pOne);
console.log(pTwo); 
console.log(pThree); 
```
Output : 
```
Himeko
Welt
undefined
```
Assign default values to variables if the array doesn't have enough elements.
```javascript
const astralExpress = ["Himeko", "Welt"];
const [pOne, pTwo, pThree = "Empty"] = astralExpress;

console.log(pOne);
console.log(pTwo); 
console.log(pThree); 
```
Output : 
```
Himeko
Welt
Empty
```

##### 4. Swapping Variables

Easily swap the values of two variables.

```javascript
let a = "March7th";
let b = "Caelus";
[a, b] = [b, a]

console.log(a);
console.log(b); 
```
Output : 
```
Caelus
Marc7hth
```

##### 5. Rest Operator

Collect the remaining elements into a new array using the rest operator (...).
```javascript
const astralExpress = ["Himeko", "Welt", "Dan Heng", "March7th", "Caelus"];
const [pOne, pTwo, ...rest] = astralExpress;

console.log(pOne); 
console.log(pTwo); 
console.log(rest); 
```
Output : 
```
Himeko
Welt
[ 'Dan Heng', 'March7th', 'Caelus' ]
```

##### 6. Nested Destructuring

Destructure nested arrays.

```javascript
const astralExpress = ["Himeko", "Welt", "Dan Heng", ["March7th", "Caelus"]];
const [pOne, pTwo, pThree, pFour, pFive] = astralExpress;

console.log(pOne); 
console.log(pTwo); 
console.log(pThree); 
console.log(pFour); 
console.log(pFive); 
```
Output : 
```
Himeko
Welt
Dan Heng
March7th
Caelus
```

You can explore more about Destructuring Array in [3.4.2-Destructuringarray.js]()

### 3.5 Map & Set

#### 3.5.1 Map

Is just same like object. but the key is up to you. You can use number as key in Map, or using BigInt, or else. Remember its still diferrent things, to define a Map, use the constructor as below : 

```javascript
const testMap = new Map();
```
If you want to determine the value of the Map directly, use a multi-dimensional array like this : 
```javascript
const testMap = new Map([
    ['10', 'a String key'],
    [10, 'a number key'],
    [true, true]
]);

console.log(testMap)
```
Output : 
```
Map(3) { '10' => 'a String key', 10 => 'a number key', true => true }
```
Here more example :
```javascript
const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["Berlin", "Germany"],
    ["Tokyo", "Japan"]
]);

// Before add
console.log(capital.size);
console.log(capital.get("Tokyo"));

// After add
capital.set("Paris", "France");
console.log(capital.size);
console.log(capital.get("Paris"));
```
Output : 
```
3
Japan
4
Paris
```
For Example about Default Value Destructuring Array you can open the code in [3.5.1-Map.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%203%20-%20Data%20Structure/3.7-Map.js)

#### 3.5.2 Set

A Set is a collection of values where each value must be unique. It is often used to store unique values of any type.

```javascript
const num = new Set([1, 5, 8, 5, 1]);

console.log(num);
```
Output : 
```
Set(3) { 1, 5, 8 }
```

In the code above there are several duplicate numbers, set will automatically discard the same numbers. 

To add data to a Set we can use the "add()" function :
```javascript
const num = new Set([1, 4, 6, 4, 1]);
num.add(5);
num.add(10);
num.add(6);

console.log(num);
```
Output : 
```
Set(5) { 1, 4, 6, 5, 10 }
```
The "add()" function accepts only one argument. If you enter an array, then the array will be treated as one of its own elements. Duplicate values will be ignored.

```javascript
const numberSet = new Set([1, 4, 6, 4, 1]);
num.add(5);
num.add(10);
num.add(6);

num.delete(4);

console.log(num);
```
Output : 
```
Set(4) { 1, 6, 5, 10 }
```
Remember that Set has no order or index, so the argument entered into the delete function is the value you want to delete, not the index.

For Example about Default Value Destructuring Array you can open the code in [3.5.2-Set.js](https://github1s.com/hilmimusyafa/dicoding-course-introductiontojavascript/blob/main/Material%20%26%20Code/Chapter%203%20-%20Data%20Structure/3.8-Set.js)