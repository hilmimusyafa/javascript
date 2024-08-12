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
const p1 = {
    // Properties
    name: 'March7th',
    weapon: 'Bow',
    element: 'Ice',
    // Action or Methods
    attack: (enemy) => {
        console.log('March7th is attacking');
    },
    ultimate: (ally) => {
        console.log('March7th is use Ultimate')
    }
}

const p2 = {
    // Properties
    name: 'Caelus',
    weapon: 'Sword',
    element: 'Fire',
    // Action or Methods
    attack: (enemy) => {
        console.log('Caelus is attacking')
    },
    ultimate: () => {
        console.log('Caelus is use Ultimate')
    }
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

You can explore about OOP in [6.1-WhatisOOP.js](https://github1s.com/hilmimusyafa/javascript/blob/main/Chapter%206%20-%20Object%20Oriented%20Programming/6.1-WhatisOOP.js)

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

You can try in [6.1.2-Functionconstructor.js](https://github1s.com/hilmimusyafa/javascript/blob/main/Chapter%206%20-%20Object%20Oriented%20Programming/6.2.1-Functionconstructor.js)

#### 6.2.2 Class Syntax in ES6

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

You can try in [6.2.2-6.2.2-ClasssyntaxES6.js](https://github1s.com/hilmimusyafa/javascript/blob/main/Chapter%206%20-%20Object%20Oriented%20Programming/6.2.2-ClasssyntaxES6.js)

### 6.3 The OOP Pillars

Actually, there's important things in OOP, OOP have four important pillars who make easy and simple for the program. Here's the pillar : 

#### 6.3.1 Inheritance

Inheritance in OOP is meaning you can inherit in OOP, but in OOP you can't inheritance treasure from your parents, but inherit the property and method from a class to another class. Inherited properties and method come from class (parent) and are used in target class (child). Like real life, we get the nature and behavior of parents. Here's a basic concept :

```javascript
classSuperClass{}   
 
classSubClassextendsSuperClass{}     
```
> *SuperClass and SubClass is important term in case for learn OOP, class that inherits its properties and methods is called SuperClass, Parent, Base, or Parent Class. A class that inherits properties and methods from another class is called SubClass and Children Class.*

Here's a simple example of inheritance : 
```javascript
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  speak() {
    console.log(`${this.name} makes a sound: ${this.sound}`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name, 'Woof');
    this.breed = breed;
  }
  displayBreed() {
    console.log(`${this.name} is a ${this.breed}`);
  }
}

class Cat extends Animal {
  constructor(name, color) {
    super(name, 'Meow');
    this.color = color;
  }
  displayColor() {
    console.log(`${this.name} is a ${this.color} cat`);
  }
}

const myDog = new Dog('Buddy', 'Golden Retriever');
const myCat = new Cat('Ginger', 'Orange');

myDog.speak();
myCat.speak();

console.log();

myDog.displayBreed();
myCat.displayColor();
```
Output : 
```
Buddy makes a sound: Woof
Ginger makes a sound: Meow

Buddy is a Golden Retriever
Ginger is a Orange cat
```

> *In the example, the super keyword is used in the constructor of the Dog and Cat classes to call the constructor of the Animal class. This allows the subclass to inherit the properties from the parent class and add its own properties.*
> 
If the code write in image, it will like this : 
![Tambahkan sedikit teks isi (10)](https://hackmd.io/_uploads/SyW_OPEcA.png)

Dogs and cats will inherit properties and methods from the Animal class, so when creating an object from a cat or dog, the animal properties will still be inherited with the difference that there is additional specialization of the cat or dog properties according to what is created.

You can make in Construction Function : 

```javascript
function Animal(name, sound) {
  this.name = name;
  this.sound = sound;
}

Animal.prototype.speak = function() {
  console.log(`${this.name} makes a sound: ${this.sound}`);
};

function Dog(name, breed) {
  Animal.call(this, name, 'Woof');
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.displayBreed = function() {
  console.log(`${this.name} is a ${this.breed}`);
};

function Cat(name, color) {
  Animal.call(this, name, 'Meow');
  this.color = color;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.displayColor = function() {
  console.log(`${this.name} is a ${this.color} cat`);
};

const myDog = new Dog('Buddy', 'Golden Retriever');
const myCat = new Cat('Ginger', 'Orange');

myDog.speak();
myCat.speak();

myDog.displayBreed();
myCat.displayColor();
```
Output : 
```
Buddy makes a sound: Woof
Ginger makes a sound: Meow

Buddy is a Golden Retriever
Ginger is a Orange cat
```
But if you use inheritance in Construction Function is hard to read, and the logics is need more time to know it. That's why ES6 is made.

You can try in [6.3.1.1-InheritanceES6.js](https://github1s.com/hilmimusyafa/javascript/blob/main/Chapter%206%20-%20Object%20Oriented%20Programming/6.3.1.1-InheritanceES6.js) and [6.3.1.2-InheritanceFunction.js](https://github1s.com/hilmimusyafa/javascript/blob/main/Chapter%206%20-%20Object%20Oriented%20Programming/6.3.1.2-InheritanceFunction.js)

#### 6.3.2 Encapsulation

Next is Encapsulation, this concept allows developers to hide the internal implementation details of an object and expose only the necessary interface to the user. With encapsulation, an object's attributes and methods can be protected from direct modification from outside the class. 

There's 2 things to remember in encapsulation, public property and private property. In the code you provided, all properties and methods on the Animal, Dog, and Cat classes are public. This means that properties such as name, sound, breed, and color can be accessed and modified directly from outside the class. To implement encapsulation, we can make these properties private, so that they can only be accessed and modified through specific methods.

To give the flag or sign, we can use "_" or "#" (for ES6) : 

```javascript
class IceCreamMachine {
  constructor(flavour) {
    this.flavour = flavour;
    this._temperature = 90
  }

  set temperature(temperature) {
    console.log('You are not allowed to change the temperature');
  }

  get temperature() {
    return this._temperature;
  }
}

const iceCream = new IceCreamMachine('chocolate');
console.log('Before change : ', iceCream.temperature);
iceCream.temperature = 100;
console.log('After change : ', iceCream.temperature);
```
Output : 
```
Before change :  90
You are not allowed to change the temperature
After change :  90
```

If you access the private properties, you will get the error code.

You can try in [6.3.2-Encapsulation.js](https://github1s.com/hilmimusyafa/javascript/blob/main/Chapter%206%20-%20Object%20Oriented%20Programming/6.3.2-Encapsulation.js)

#### 6.3.3 Polymorphism

Polymorphism is a core concept in Object-Oriented Programming (OOP) that allows objects of different classes to be treated as objects of a common super class. It’s about writing more generic and flexible code. In JavaScript, polymorphism is achieved through method overriding and interface-like behavior.

```javascript
class OperatingSystem {
  constructor(name, version) {
    this.name = name;
    this.version = version;
  }

  boot() {
    console.log(`Booting ${this.name} version ${this.version}`);
  }
}

class AndroidOS extends OperatingSystem {
  constructor(name, version, customSkin) {
    super(name, version);
    this.customSkin = customSkin;
  }

  boot() {
    super.boot();
    console.log(`${this.name} is booting with custom skin: ${this.customSkin}`);
  }

  splitScreen() {
    console.log(`${this.name} supports Split Screen feature`);
  }
}

const androidOS = new AndroidOS('Android', '12', 'One UI');

androidOS.boot();
```
Output : 
```
Booting Android version 12
Android is booting with custom skin: One UI
```

You can try in [6.3.3-Polymorphism.js](https://github1s.com/hilmimusyafa/javascript/blob/main/Chapter%206%20-%20Object%20Oriented%20Programming/6.3.3-Polymorphism.js)

#### 6.3.4 Object Composition in JavaScript

Object composition is a design principle in which objects are composed of other objects, meaning that instead of using inheritance (which represents an "is-a" relationship), you use composition (which represents a "has-a" relationship).

```javascript
class OperatingSystem {
  constructor(name, version) {
    this.name = name;
    this.version = version;
  }

  boot() {
    console.log(`Booting ${this.name} version ${this.version}`);
  }
}

class Camera {
  constructor(resolution) {
    this.resolution = resolution;
  }

  takePhoto() {
    console.log(`Taking photo with ${this.resolution} resolution`);
  }
}

class Battery {
  constructor(capacity) {
    this.capacity = capacity;
  }

  charge() {
    console.log(`Charging battery with capacity ${this.capacity}mAh`);
  }
}

class Smartphone {
  constructor(color, brand, os, camera, battery) {
    this.color = color;
    this.brand = brand;
    this.os = os;
    this.camera = camera;
    this.battery = battery;
  }

  powerOn() {
    console.log(`${this.brand} smartphone is powering on...`);
    this.os.boot();
  }

  takePhoto() {
    this.camera.takePhoto();
  }

  chargePhone() {
    this.battery.charge();
  }
}

// Create an instance for each component
const os = new OperatingSystem('Android', '12');
const camera = new Camera('108MP');
const battery = new Battery(5000);

// Create an instance of a Smartphone consisting of the above components.
const smartphone = new Smartphone('Black', 'Samsung', os, camera, battery);

// Using a method that combines these components
smartphone.powerOn();
smartphone.takePhoto();
smartphone.chargePhone();
```
Output : 
```
Samsung smartphone is powering on...
Booting Android version 12
Taking photo with 108MP resolution
Charging battery with capacity 5000mAh
```

You can try in [6.3.4-Objectcomposition.js](https://github1s.com/hilmimusyafa/javascript/blob/main/Chapter%206%20-%20Object%20Oriented%20Programming/6.3.4-Objectcomposition.js)