class Calculator {
  add(a: number, b: number): number;
  add(a: string, b: string): string;

  add(a: any, b: any) {
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

let a: Animal;

a = new Dog();
a = new Animal();

a.sound();

//real life example

abstract class Payment {
  abstract pay(amount: number): void;
}

class CreditCardPayment extends Payment {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Credit Card`);
  }
}

class PaypalPayment extends Payment {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Paypal`);
  }
}

function paymentProcess(paymentMethod: Payment, amount: number) {
  paymentMethod.pay(amount);
}

paymentProcess(new CreditCardPayment(), 5000);
paymentProcess(new PaypalPayment(), 2000);
