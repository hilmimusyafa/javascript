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
