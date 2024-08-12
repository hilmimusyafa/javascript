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