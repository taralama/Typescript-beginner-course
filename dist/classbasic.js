"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Department {
    employees = [];
    addEmployee(employee) {
        this.employees.push(employee);
    }
    showEmployee() {
        for (const employee of this.employees) {
            console.log(employee);
        }
    }
}
class ItDepartment extends Department {
    itEmployee = [];
    addEmployee(employee) {
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
    name = "";
    age = 0;
    setName(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hi ${this.name}! nice to meet you `);
    }
}
class Animal {
    department;
    constructor(department) {
        this.department = department;
    }
    animalName = "";
    breed = "";
    setAnimal(name) { }
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
    brand;
    constructor(brand) {
        this.brand = brand;
    }
    drive() {
        console.log(`${this.brand} is being driven`);
    }
    service() {
        console.log(`${this.brand} is being serviced`);
    }
}
// The "container" class
class Driver {
    car;
    name;
    constructor(car, name) {
        this.car = car;
        this.name = name;
    }
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
//# sourceMappingURL=classbasic.js.map