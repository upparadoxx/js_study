class Vehicle {
  constructor (name , wheel) {
  this.name = name
  this.wheel = wheel
  }
}

const myVehicle = new Vehicle('운송수단', 2)
console.log(myVehicle);

class Bicycle extends Vehicle {
  constructor(name , wheel) {
    super(name, wheel)
  }
}

const myBicycle = new Bicycle('세발', 3)
console.log(myBicycle);

class Car extends Bicycle {
  constructor (name, wheel, licence, door) {
    super(name, wheel)
    this.licence = licence
    this.door = door
  }
}

const myCar = new Car('벤츠', 4, 'ture', 2)
console.log(myCar);