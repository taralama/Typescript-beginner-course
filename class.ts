class Department {
  private employees: string[] = [];

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  showEmployee() {
    for (const employee of this.employees) {
      console.log(employee);
    }
  }

  //   constructor(private readonly id: number, public departName: string) {
  //     this.addEmployee(departName);
  //   }
}

class ItDepartment extends Department {
  private itEmployee: string[] = [];

  addEmployee(employee: string) {
    this.itEmployee.push(employee);
  }
  showEmployee() {
    console.log(this.itEmployee);
  }
}

// const departmentObj = new ItDepartment();

// departmentObj.addEmployee("Tara");
// departmentObj.showEmployee();

class Person {
  name: string = "";
  age: number = 0;

  setName(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hi ${this.name}! nice to meet you `);
  }
}

class Animal {
  constructor(private department: Person) {}
  animalName: string = "";
  breed: string = "";

  setAnimal(name: string) {}

  makeSound() {
    console.log("...");
  }
}

const personObj = new Person();
const AnimalObj = new Animal(personObj);

personObj.setName("Tara");
personObj.greet();

//composition in which the object is pass to another class that is Driver class

// The "part" class
class Car {
  constructor(public brand: string) {}

  drive() {
    console.log(`${this.brand} is being driven`);
  }

  service() {
    console.log(`${this.brand} is being serviced`);
  }
}

// The "container" class
class Driver {
  constructor(private car: Car, public name: string) {}

  driveCar() {
    console.log(`${this.name} is driving the car`);
    this.car.drive(); // Using the car instance
  }

  serviceCar() {
    console.log(`${this.name} is servicing the car`);
    this.car.service(); // Using the car instance
  }
}

// Create a car instance
const myCar = new Car("Toyota");

// Pass it to a driver
const driver1 = new Driver(myCar, "Alice");

// Use composition
driver1.driveCar();
driver1.serviceCar();

// here driver is not car or part of car hence extends
