//object parameter in function

const student: { name: string; age: number } = {
  name: "Tara",
  age: 10,
};

function collageFinder(college: {
  name: string;
  programme: string;
  location: string;
}) {
  console.log(college);
}

const college: { name: string; programme: string; location: string } = {
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

type Person = {
  name: string;
  age: number;
  hobbies: string[];
  education: {
    secondary_school: string;
    high_secondary_school: string;
    bachelor: string;
  };
};

function personDetail(person: Person) {
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

// Read only

type User = {
  readonly id: number;
  username: string;
};

const user: User = {
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
