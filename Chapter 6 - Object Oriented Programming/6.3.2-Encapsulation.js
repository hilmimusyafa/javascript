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

const iceCream = new IceCreamMachine(chocolate);
console.log('Before change : ', iceCream.temperature);
iceCream.temperature = 100;
console.log('After change : ', iceCream.temperature);