"use strict";
// Write a function that takes a number | string and:
Object.defineProperty(exports, "__esModule", { value: true });
// If it’s a number, return the square.
// If it’s a string, return the string length.
const measure = (data) => {
    if (typeof data == "number")
        return data * data;
    else {
        return data.length;
    }
};
const measurement = measure("Tara");
// console.log(measurement);
var UserRole;
(function (UserRole) {
    UserRole["superAdmin"] = "Super Admin";
    UserRole["admin"] = "Admin";
    UserRole["editor"] = "Editor";
    UserRole["viewer"] = "Viewer";
})(UserRole || (UserRole = {}));
const roleChecker = (userRole) => {
    switch (userRole) {
        case UserRole.admin:
            console.log("This is admin");
            break;
        case UserRole.editor:
            console.log("This is editor");
            break;
        case UserRole.superAdmin:
            console.log("This is super Admin");
            break;
        case UserRole.viewer:
            console.log("This is Viewer");
        default:
            break;
    }
};
roleChecker(UserRole.admin);
roleChecker(UserRole.viewer);
//loops with type safety
const marks = [2, 3, 4, 5, 2];
for (const mark of marks) {
    console.log(mark);
}
function isDog(animal) {
    return animal.kind === "dog";
}
function makeSound(animal) {
    if (isDog(animal)) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
makeSound({ kind: "dog", bark() { } });
//# sourceMappingURL=conditionalState.js.map