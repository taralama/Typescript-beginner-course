// lieral types

type Tense = "go" | "going" | "went";

function wordFiller(value: Tense) {
  console.log("The person is ", value);
}

wordFiller("going");

const giveAnswer = (answer: "yes" | "No" | "Maybe") => {
  console.log("answer is ", answer);
};

giveAnswer("yes");

// type narrowing

function calculateTax(price: number | string, tax: number) {
  if (typeof price == "string") return price.replace("$", "");
  else return price * tax;
}

console.log(calculateTax(10, 20));
