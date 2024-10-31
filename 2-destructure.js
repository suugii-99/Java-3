// Task 1: Use destructuring to assign the values "John" and "Doe" from the
// `fullName` array into separate variables `firstName` and `lastName`.
const fullName = ["John", "Doe"];
const [firstName, lastName] = fullName;


// Task 2: Destructure the `user` object below to create variables `name`
// and `age` using object destructuring.
const user = {
  name: "Alice",
  age: 25,
};

// Task 3: Print `firstName`, `lastName`, `name`, and `age` using console.log.
const { name: userName, age } = user;
console.log("Task 3 - firstName:", firstName);
console.log("Task 3 - lastName:", lastName);
console.log("Task 3 - userName:", userName);
console.log("Task 3 - age:", age);


// Task 4: Write a function called `getFullName` that takes an object with properties
// `firstName` and `lastName`, and returns a string that combines them in the format
// "FirstName LastName". The function has to use destructuring.
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

const person = {
  firstName: "Jane",
  lastName: "Smith",
};

// Task 5: Call the `getFullName` function with the `person` object and print
// the result using console.log.
const fullNameString = getFullName(person);
console.log("Task 5 - fullName:", fullNameString);
