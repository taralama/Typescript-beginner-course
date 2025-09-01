"use strict";
// Interface
Object.defineProperty(exports, "__esModule", { value: true });
const detailPrinter = (detail) => {
    console.log("Person`s detail : ", detail);
    console.log(detail.greet());
};
const person1 = {
    name: "Tara Hero",
    address: "Budhanilkantha",
    age: 23,
    greet() {
        console.log("hello my name is", this.name);
    },
};
detailPrinter(person1);
//# sourceMappingURL=alias.js.map