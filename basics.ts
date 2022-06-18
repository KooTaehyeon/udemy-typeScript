// Primitives : number , string , boolean
// More complex types : arrays , objects
// Function types , parameters

// Primitives

let age: number;

age = 12;

let userName: string;

userName = 'max';

let isInstructor: boolean;

isInstructor = true;

//Mor complex types

type Person = {
  name: string;
  age: number;
};

let hobbies: string | string[];

hobbies = ['Sports', 'Cooking'];

let person: Person;

person = {
  name: 'max',
  age: 31,
};
// person = {
//   isEmployee: true,
// };

let people: Person[];

// Type inference

let course: string | number | boolean = 'React - The Complete Guide';

course = 1234;

// Functions & types

function add(a: number, b: number): number | string {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}
const demoArry = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArry, -1); // [-1,1,2,3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');
//updatedArray[0].split('');
