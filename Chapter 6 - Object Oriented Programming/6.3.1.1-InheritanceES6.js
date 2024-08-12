// ES6
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

