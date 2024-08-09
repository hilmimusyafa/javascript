## Chapter 6 : Object-Oriented Programming (OOP)

### 6.1 What is Object-Oriented Programming?

freeCodeCamp said, Object-Oriented Programming is a programming style based on classes and objects. These group data (properties) and methods (actions) inside a box. In OOP, an object contains two things Properties and Methods.

- Properties are values that store information about the object.
- Methods (actions) are functions that describe actions that can be performed by the object.

The OOP paradigm is often described in real world life. OOP can use in many things, like this example, i will make Astral Express member from Honkai Star Rail Game. Here's the table :

| Identifier       | **Properties**                                                                    | **Action**                          |
| ---------------- | --------------------------------------------------------------------------------- | ----------------------------------- |
| P1               | **Name**: "March 7th" <br> **Weapon**: "Bow" <br> **Element**: "Ice"              | - Attack Enemy <br> - Ultimate |
| P2               | **Name**: "Caelus" <br> **Weapon**: "Sword" <br> **Element**: "Fire"              | - Attack Enemy <br> - Ultimate      |
| P3               | **Name**: "Welt Yang" <br> **Weapon**: "Sword" <br> **Element**: "Harmony"        | - Attack Enemy <br> - Ultimate      |
| P4               | **Name**: "Himeko" <br> **Weapon**: "Sword" <br> **Element**: "Fire"              | - Attack Enemy <br> - Ultimate      |
| P5               | **Name**: "Dan Heng" <br> **Weapon**: "Sword" <br> **Element**: "Wind"            | - Attack Enemy <br> - Ultimate      |

And non OOP JavaScript code : 

```javascript
const P1 = {
    // Properties
    name: 'March7th',
    weapon: 'Bow',
    element: 'Ice',
    // Action or Methods
    attack: (enemy) => {
        console.log('March7th is attacking');
    } defend: (ally) => {
        console.log('March7th is use Ultimate')
    }
}

const P2 = {
    // Properties
    name: 'Caelus',
    weapon: 'Sword',
    element: 'Fire',
    // Action or Methods
    attack: (enemy) => {
        console.log('Caelus is attacking');
    } ultimate: () => {
        console.log('Caelus is use Ultimate')
}

// and more
```
Yeah, it will be more difficult if it is like that, maybe 2 is still small., 3? 4? 6? 9? 1000? Of course it is confusing, especially if each object interacts with each other, it will be a disaster if using regular concepts. Therefore the existence of OOP can make it easier to organize object by creating a blueprint object. 

Blueprinting objects allows us to create a template for generating objects with specific properties and methods. This means that we can simply use the template to create similar objects, while being able to specify different property values.

And this code in OOP paradigm : 
```javascript
// Define a Character class
function Person(name, weapon, element) {
    this.name = name;
    this.weapon = weapon;
    this.element = element;
}

// Method declaration
Person.prototype.attack = function() {
    console.log(`${this.name} is attacking`);
}
Person.prototype.ultimate = function() {
    console.log(`${this.name} is use ultimate ability`);
}

// Create a person object with person constructor function
const P1 = new Person('March 7th', 'Bow', 'Ice')
const P2 = new Person('Caelus', 'Sword', 'Fire')
const P3 = new Person('Welt Yang', 'Sword', 'Harmony')
const P4 = new Person('Himeko', 'Sword', 'Fire')
const P5 = new Person('Dan Heng', 'Spear', 'Wind')

// Example of output
console.log(P1);
P1.attack();
```
Output : 
```
person { name: 'March 7th', weapon: 'Bow', element: 'Ice' }
March 7th is attacking
```
Easy right? there is blueprint called person. In the blueprint, it will can define the properties and methods. After creating a blueprint, it will can easily create many person objects, for example P1, P2, P3, and myPerson more easily.

![Tambahkan sedikit teks isi (9)](https://hackmd.io/_uploads/S1QrCuX5A.png)

Like the object in image, that's a concept for OOP you can make more object without rewrite in what's the properties. 

You can explore about the confusing manual one to one object making [6.1-WhatisOOP.js]()

### 6.2 OOP Paradigm Constructor

#### 6.2.1 Function Constructor

In fact, if you read about OOP in section 6.1, you can see an example of OOP in JavaScript. The concept of OOP typically requires classes or a class-based programming language. Since JavaScript isn't a class-based language, it doesn't inherently know about classes. However, JavaScript can still implement OOP principles. JavaScript achieves this through a different method, specifically by using functions as OOP constructors. So, while JavaScript can use OOP, it does so using functions, as shown in the example in section 6.1. But in this material i will take an example again , but diffrent things : 
```javascript
// Object decalration (Properties)
function Car(brand, type, year, color) {
    this.brand = brand;
    this.type = type;
    this.year = year;
    this.color = color;
}
 
//  Methods declaration
Car.prototype.drive = function() {
    console.log(`${this.brand} ${this.type} is driving`);
}
 
Car.prototype.reverse = function() {
    console.log(`${this.brand} ${this.type} is reversing`);
}
 
Car.prototype.turn = function() {
    console.log(`${this.brand} ${this.type} is turning`);
}
 
// Create a car object with the Car constructor function
const car1 = new Car('Nissan', 'GTR', 2024, 'White');
const car2 = new Car('BMW', 'M3', 2024, 'Black');
const car3 = new Car('Hyundai', 'Ioniq 5', 2024, 'White');
 
console.log(car1);
console.log(car2);
console.log(car3);
 
console.log();

car1.drive();
car2.drive();
car3.drive();
```
Output : 
```
Car { brand: 'Nissan', type: 'GTR', year: 2024, color: 'White' }
Car { brand: 'BMW', type: 'M3', year: 2024, color: 'Black' }
Car { brand: 'Hyundai', type: 'Ioniq 5', year: 2024, color: 'White' }

Nissan GTR is driving
BMW M3 is driving
Hyundai Ioniq 5 is driving
```
Just note, constructor functions can only be created using regular functions, not arrow functions, it will make miscomunication between basic function or OOP function

```javascript
const Car = (brand) => this.brand = brand;
 
const car1 = new Car('Toyota');
```
Output : 
```
TypeError: Car is not a constructor
```

> *Usually, constructor function names are written with a capital letter to differentiate them from ordinary function names.*

#### 5.2.2 Class Syntax in ES6

A more modern way to create objects and classes is to use ES6. ES6 supports classes, making JavaScript similar to other class-based languages such as Java, C++, and C#. Here's how to create a class : 

```javascript
// Define a Character class using ES6 syntax
class Person {
    constructor(name, weapon, element) {
        this.name = name;
        this.weapon = weapon;
        this.element = element;
    }

    // Method declarations
    attack() {
        console.log(`${this.name} is attacking`);
    }

    ultimate() {
        console.log(`${this.name} is using their ultimate ability`);
    }
}

// Create person objects using the Person class
const P1 = new Person('March 7th', 'Bow', 'Ice');
const P2 = new Person('Caelus', 'Sword', 'Fire');
const P3 = new Person('Welt Yang', 'Sword', 'Harmony');
const P4 = new Person('Himeko', 'Sword', 'Fire');
const P5 = new Person('Dan Heng', 'Spear', 'Wind');

// Example of output
console.log(P1);
P1.attack();
```
Although JavaScript already supports classes, it does not turn JavaScript into a class-based programming language. In fact, class syntax in JavaScript is just syntactic sugar or an alternative way of defining constructor functions.

### 6.3 The OOP Pillars

