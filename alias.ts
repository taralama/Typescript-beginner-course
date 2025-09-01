// Interface

interface Person {
  name: string;
  age: number;
  address: string;
  nickname?: string;
  greet: () => void;
}

const detailPrinter = (detail: Person) => {
  console.log("Person`s detail : ", detail);
  console.log(detail.greet());
};

const person1: Person = {
  name: "Tara Hero",
  address: "Budhanilkantha",
  age: 23,
  greet() {
    console.log("hello my name is", this.name);
  },
};

detailPrinter(person1);
