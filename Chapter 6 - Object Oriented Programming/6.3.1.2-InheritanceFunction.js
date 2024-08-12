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