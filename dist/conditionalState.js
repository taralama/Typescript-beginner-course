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
            console.log("this is admin");
            break;
        case UserRole.editor:
            console.log("this is editor");
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
//# sourceMappingURL=conditionalState.js.map