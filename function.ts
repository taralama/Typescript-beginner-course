function square(num: number) {
  return num * num;
}

square(3);

const area = (length: number, breath: number) => {
  return length * breath;
};

area(10, 20);

// default parameter

const volume = (length: number = 10, breath: number, height: number) => {
  return length * breath * height;
};

volume(10, 20, 30);

// function return types

const greet = (): void => {
  console.log("say hi");
};

const colors = ["red", "orange", "yellow"];

colors.map((color) => {
  //color is annotated string
});

const neverReturn = (): never => {
  throw new Error("This function never returns!");
};
