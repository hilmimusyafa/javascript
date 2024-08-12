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