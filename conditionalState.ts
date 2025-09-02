// Write a function that takes a number | string and:

// If it’s a number, return the square.

// If it’s a string, return the string length.

const measure = (data: number | string) => {
  if (typeof data == "number") return data * data;
  else {
    return data.length;
  }
};

const measurement = measure("Tara");

// console.log(measurement);

enum UserRole {
  superAdmin = "Super Admin",
  admin = "Admin",
  editor = "Editor",
  viewer = "Viewer",
}

const roleChecker = (userRole: UserRole) => {
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

const marks: Array<number> | number[] = [2, 3, 4, 5, 2];

for (const mark of marks) {
  console.log(mark);
}

type Dog = { kind: "dog"; bark: () => void };
type Cat = { kind: "cat"; meow: () => void };
type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
  return animal.kind === "dog";
}

function makeSound(animal: Animal) {
  if (isDog(animal)) {
    animal.bark();
  } else {
    animal.meow();
  }
}

makeSound({ kind: "dog", bark() {} });
