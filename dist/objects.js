"use strict";
//object parameter in function
Object.defineProperty(exports, "__esModule", { value: true });
const student = {
    name: "Tara",
    age: 10,
};
function collageFinder(college) {
    console.log(college);
}
const college = {
    location: "",
    name: "",
    programme: "",
};
const value = {
    name: "Texas collage",
    programme: "BIT",
    location: "Mitra park, Chabahil",
    est_date: 2006,
};
collageFinder(value);
collageFinder({
    ...{
        name: "Texas collage",
        programme: "BIT",
        location: "Mitra park, Chabahil",
        est_date: 2006,
    },
});
function personDetail(person) {
    console.log(person);
}
personDetail({
    age: 10,
    name: "Tara",
    hobbies: ["singing", "dancing", "traveling"],
    education: {
        secondary_school: "Himalaya Boarding School",
        high_secondary_school: "Hrit Academy",
        bachelor: "Texas college of Management & IT",
    },
});
const user = {
    id: 123,
    username: "superman",
};
//intersection types
// use of | or pipe
const dog = {
    name: "Rocky",
    age: 10,
    color: "Brown",
    breed: "German",
};
console.log(Object.entries(dog));
// Entries change the object key value to array key value
console.log(Object.fromEntries(Object.entries(dog)));
//change the array key value to its original obj by from Entries
//# sourceMappingURL=objects.js.map