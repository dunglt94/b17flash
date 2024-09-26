let battery = new Battery(10);
battery.setEnergy(10)

let flashlight = new FlashLamp();
flashlight.setBattery(battery);
console.log(battery);

document.write(`Battery info: ${flashlight.getBatteryInfo()} <br/>`);
flashlight.light();

document.write(`Turn on<br/>`)
flashlight.turnOn();
flashlight.light();
document.write(`Battery info: ${flashlight.getBatteryInfo()} <br/>`);

document.write("Turn off<br/>")
flashlight.turnOff();
flashlight.light();