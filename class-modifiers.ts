class Car {
  model: string = ""; // default this is public so this can be accessed from every where

  constructor(model: string) {
    this.model = model;
  }
}

const c = new Car("NISSAN");
console.log(c.model);

class Animal {
  private name: string = "";
  private breed: string = "";

  getName() {
    console.log(this.name);
  }

  constructor(name: string) {
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

// Example with protected modifier
class Person {
  protected age: number;

  constructor(age: number) {
    this.age = age;
  }

  showAge() {
    console.log(`Age: ${this.age}`);
  }
}

class Student extends Person {
  displayAge() {
    // Can access protected member in subclass
    console.log(`Student age is ${this.age}`);
  }
}

const student = new Student(21);
student.displayAge();
// student.age; // Error: Property 'age' is protected and only accessible within class 'Person' and its subclasses

// Example with readonly modifier
class Book {
  readonly title: string;

  constructor(title: string) {
    this.title = title;
  }
}

const book = new Book("TypeScript Handbook");
console.log(book.title);
// book.title = "Another Title"; // Error: Cannot assign to 'title' because it is a read-only property.
