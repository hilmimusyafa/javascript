// Non OOP

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

// OOP

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