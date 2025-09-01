"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function square(num) {
    return num * num;
}
square(3);
const area = (length, breath) => {
    return length * breath;
};
area(10, 20);
// default parameter
const volume = (length = 10, breath, height) => {
    return length * breath * height;
};
volume(10, 20, 30);
// function return types
const greet = () => {
    console.log("say hi");
};
const colors = ["red", "orange", "yellow"];
colors.map((color) => {
    //color is annotated string
});
const neverReturn = () => {
    throw new Error("This function never returns!");
};
//# sourceMappingURL=function.js.map