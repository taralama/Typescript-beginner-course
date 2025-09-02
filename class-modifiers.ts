class Car {
  model: string = "";

  constructor(model: string) {
    this.model = model;
  }
}

const c = new Car("NISSAN");
console.log(c.model);
