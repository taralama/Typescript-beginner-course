"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const people = [
    { id: 101, name: "John" },
    { id: 102, name: "Alice" },
];
const p = people.map((person) => [person.id, person]);
// console.log(p);
const output = Object.fromEntries(p);
// console.log(output);
// console.log(Object.values(people));
// 2. Merge two objects deeply
const a = { user: { name: "John", address: { city: "New York", zip: 10001 } } };
const b = { user: { age: 30, address: { street: "5th Ave" } } };
function deepMerge(target, source) {
    for (const key in source) {
        if (source[key] &&
            typeof source[key] === "object" &&
            !Array.isArray(source[key])) {
            if (!target[key] || typeof target[key] !== "object") {
                target[key] = {};
            }
            deepMerge(target[key], source[key]);
        }
        else {
            target[key] = source[key];
        }
    }
    return target;
}
const merged = deepMerge(JSON.parse(JSON.stringify(a)), b);
console.log(merged);
//# sourceMappingURL=objectManipulation.js.map