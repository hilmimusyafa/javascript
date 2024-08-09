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