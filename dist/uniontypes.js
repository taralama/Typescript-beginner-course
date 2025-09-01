"use strict";
// lieral types
Object.defineProperty(exports, "__esModule", { value: true });
function wordFiller(value) {
    console.log("The person is ", value);
}
wordFiller("going");
const giveAnswer = (answer) => {
    console.log("answer is ", answer);
};
giveAnswer("yes");
// type narrowing
function calculateTax(price, tax) {
    if (typeof price == "string")
        return price.replace("$", "");
    else
        return price * tax;
}
console.log(calculateTax(10, 20));
//# sourceMappingURL=uniontypes.js.map