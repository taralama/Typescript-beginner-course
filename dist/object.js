"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const people = [
    { id: 101, name: "John" },
    { id: 102, name: "Alice" },
];
const p = people.map((person) => [person.id, person]);
console.log(p);
const output = Object.fromEntries(p);
console.log(output);
console.log(Object.values(people));
//# sourceMappingURL=object.js.map