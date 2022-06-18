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

let hobbies: string | string[];

hobbies = ['Sports', 'Cooking'];

let person: { name: string; age: number };

person = {
  name: 'max',
  age: 31,
};
// person = {
//   isEmployee: true,
// };

let people: {
  name: string;
  age: number;
}[];

// Type inference

let course: string | number | boolean = 'React - The Complete Guide';

course = 1234;
