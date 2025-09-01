interface person1 {
  name: string;
  age: number;
  hobbies: Array<string>;
}

interface person2 {
  address: string;
  education: {
    primary_education: string;
    secondary_education: string;
    high_secondary_education: string;
  };
}

interface FullDetail extends person1, person2 {}

const fullDetail: FullDetail = {
  name: "ramesh",
  address: "budhanilkantha",
  age: 73,
  education: {
    high_secondary_education: "nilkantha",
    primary_education: "chadbag",
    secondary_education: "nuwakot",
  },
  hobbies: ["mul"],
};
