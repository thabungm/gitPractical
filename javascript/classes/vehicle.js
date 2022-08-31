class Vehicle {
  constructor(model, color, transmission) {
    this.model = model;
    this.color = color;
    this.tranmission = transmission;
    this.speed = 0;
  }

  accelerate() {
    this.speed += 10;
    console.log(`Speed at ${this.speed} km/hour`);
  }

  decelerate() {
    this.speed -= 10;
    if (this.speed <= 0) {
      console.log(`Vehicle halted`);
      return;
    }
    console.log(`Speed at ${this.speed} km/hour`);
  }
}

const honda = new Vehicle('Model1', 'blue', 'manual');
// console.log(honda);
honda.accelerate();
honda.accelerate();
honda.accelerate();
honda.accelerate();
honda.decelerate();
honda.decelerate();
honda.decelerate();
honda.decelerate();
