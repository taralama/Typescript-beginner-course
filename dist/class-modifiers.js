"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    model = ""; // default this is public so this can be accessed from every where
    constructor(model) {
        this.model = model;
    }
}
const c = new Car("NISSAN");
console.log(c.model);
class Animal {
    name = "";
    breed = "";
    getName() {
        console.log(this.name);
    }
    constructor(name) {
        this.name = name;
    }
}
const a = new Animal("Dog");
a.getName();
// console.log(a.name) this cannot be accessed from outside the class
class DomesticAnimal extends Animal {
    super() {
        console.log("animal");
        // this.name this cannot be accessed from the sub class as this name is private
        // this would be possible if the modifier was protected
    }
}
const b = new DomesticAnimal("Cat");
b.super();
//# sourceMappingURL=class-modifiers.js.map