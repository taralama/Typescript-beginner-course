"use strict";
// filter active users
Object.defineProperty(exports, "__esModule", { value: true });
const users = [
    { name: "Alice", isActive: true },
    { name: "Bob", isActive: false },
    { name: "Charlie", isActive: true },
];
const activeUsers = users.filter((user) => user.isActive == true);
// console.log(activeUsers);
const students = [
    { name: "John", grade: "A" },
    { name: "Jane", grade: "B" },
    {
        name: "Jake",
        grade: "A",
    },
    { name: "Jill", grade: "C" },
];
const Group_A = students
    .filter((student) => student.grade == "A")
    .map((item) => ({ name: item.name }));
const Group_B = students
    .filter((student) => student.grade == "B")
    .map((item) => ({ name: item.name }));
const Group_C = students
    .filter((students) => students.grade == "C")
    .map((item) => ({ name: item.name }));
const division = {
    A: Group_A,
    B: Group_B,
    C: Group_C,
};
// console.log(division);
// 3. Remove duplicate values from array
const numbers = [1, 2, 2, 3, 4, 4, 5];
const removedArray = Array.from(new Set(numbers));
// console.log(removedArray);
let uniqueNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if (typeof num === "number" && !uniqueNumbers.includes(num)) {
        uniqueNumbers.push(num);
    }
}
// console.log(uniqueNumbers);
const att = [1, [2, 3], [4, [5, 6]]];
att.flat(3);
// 5. Count occurrences of each fruit
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
function fruitCounter(number) {
    let obj = {};
    number.forEach((n) => {
        obj[n] = (obj[n] || 0) + 1;
    });
    return obj;
}
// console.log(fruitCounter(fruits));
// 6. Get top 2 most expensive products
const products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },
    {
        name: "Tablet",
        price: 600,
    },
];
const price = products.map((item) => item.price);
let expensive = 0;
for (let i = 0; i < price.length; i++) {
    let currentNum = price[i];
    if (typeof currentNum !== "number" || expensive > currentNum)
        continue;
    expensive = currentNum;
}
function expensiveFinder(item, top) {
    const price = products.map((item) => item.price);
    return price.sort().slice(0, top);
}
// console.log(expensiveFinder(products, 2));
const family = {
    father: { age: 50 },
    mother: { age: 48 },
    children: [
        { name: "Anna", age: 20 },
        { name: "Tom", age: 18 },
    ],
};
//# sourceMappingURL=index.js.map