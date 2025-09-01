// filter active users

interface User {
  name: string;
  isActive: boolean;
}

const users: User[] = [
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
  { name: "Tiger", grade: "D" },
  { name: "Tom", grade: "C" },
  { name: "jammy", grade: "C" },
];

function gradeGrouper(students: { name: string; grade: string }[]) {
  let division: { [key: string]: { name: string }[] } = {};

  students.forEach((item) => {
    if (item.grade in division) {
      division[item.grade]?.push({ name: item.name });
    } else division[`${item.grade}`] = [{ name: item.name }];
  });

  return division;
}

// console.log(gradeGrouper(students));

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

let uniqueNumbers: number[] = [];

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

function fruitCounter(number: string[]) {
  let obj: { [key: string]: number } = {};

  number.forEach((n: string) => {
    obj[n] = (obj[n] || 1) + 1;
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

const price: number[] = products.map((item) => item.price);
let expensive = 0;
for (let i = 0; i < price.length; i++) {
  let currentNum = price[i];
  if (typeof currentNum !== "number" || expensive > currentNum) continue;
  expensive = currentNum;
}

function expensiveFinder(item: { name: string; price: number }[], top: number) {
  const price: number[] = products.map((item) => item.price);
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
  brother_in_law: [{ name: "Frodo", age: 18 }],
};

let totalAge = 0;

for (const key in family) {
  let T = family[key as keyof typeof family];
  if (typeof T === "object") {
    if ("age" in T) {
      totalAge += T.age;
    } else if (Array.isArray(T)) {
      T.forEach((item) => {
        if (item.age) {
          totalAge += item.age;
        }
      });
    }
  }
}

const sumAge = (obj: any): number => {
  let total = 0;

  if (typeof obj === "object" && obj !== null) {
    // If this object itself has an age
    if ("age" in obj && typeof obj.age === "number") {
      total += obj.age;
    }

    // If it's an array, loop through its items
    if (Array.isArray(obj)) {
      for (const item of obj) {
        total += sumAge(item);
      }
    } else {
      // If it's a plain object, loop through its properties
      for (const key in obj) {
        total += sumAge(obj[key]);
      }
    }
  }

  return total;
};

// console.log(sumAge(family));

// console.log(totalAge);

// find maximum number``

const nums = [2, 5, 8, 10, 3];

function maximumFinder(nums: number[]) {
  let maximum = 0;

  for (const item of nums) {
    if (item > maximum) maximum = item;
  }

  return maximum;
}

// console.log("maximum number is", maximumFinder(nums));

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
  { name: "David", age: 30 },
];
const ageGrouper = (people: { name: string; age: number }[]) => {
  let newGroup: { [age: number]: { name: string; age: number }[] } = {};
  people.forEach((item) => {
    if (!newGroup[item.age]) {
      newGroup[item.age] = [];
    }
    newGroup[item.age]!.push(item);
  });

  console.log(newGroup);
};

// ageGrouper(people);

// object creater

function objectCreater() {
  let person: { [name: string]: { name: string } } = {};

  // if (!person["name"]) {
  person["name"] = { name: "tara" };
  // }

  console.log(person);
}

objectCreater();
