class FlashLamp {
    battery;

    constructor(battery) {
        this.battery = battery;
    }

    setBattery(battery) {
        this.battery = battery;
    }
    getBatteryInfo() {
        return this.battery.getEnergy();
    }
    light() {
        if (this.status) alert('Lighting');
        else alert('Not Lighting');
    }
    turnOn() {
        this.status = true;
    }
    turnOff() {
        this.status = false;
    }
}
