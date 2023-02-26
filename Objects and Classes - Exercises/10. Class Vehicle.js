class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.parts.quality = parts.engine * parts.power;
        this.fuel = fuel;
    }

    drive(fuelLoss) {
        this.fuel -= fuelLoss;
    }
}
let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('Yamaha Motorcycle', 'Fz6 600cc', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);
console.log(vehicle.type)
console.log(vehicle.model)
console.log(vehicle.parts)