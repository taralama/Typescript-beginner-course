"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Calculator {
    add(a, b) {
        return a + b;
    }
}
const c = new Calculator();
// console.log(c.add("Hello", "World!"));
// console.log(c.add(1, 2));
// console.log("animal");
//Here function with same name and different parameter they works on how they are called
//---------------------------------------------------------------------------------
// best Example of polymorphism
class Animal {
    sound() {
        console.log("Animal makes sound");
    }
}
class Dog extends Animal {
    sound() {
        console.log("Bark");
    }
}
class Cat extends Animal {
    sound() {
        console.log("Meow");
    }
}
let a;
a = new Dog();
a = new Animal();
a.sound();
//real life example
class Payment {
}
class CreditCardPayment extends Payment {
    pay(amount) {
        console.log(`Paid ${amount} using Credit Card`);
    }
}
class PaypalPayment extends Payment {
    pay(amount) {
        console.log(`Paid ${amount} using Paypal`);
    }
}
function paymentProcess(paymentMethod, amount) {
    paymentMethod.pay(amount);
}
paymentProcess(new CreditCardPayment(), 2000);
paymentProcess(new PaypalPayment(), 2000);
//# sourceMappingURL=polymorphism.js.map