const ages = [12, 18, 25, 8, 30, 16];

// Task 1: Use the .filter() method to create a new array called `adultAges` which only
// includes ages that are 18 or older. Use console.log to print the `adultAges` array.
const adultAges = ages.filter(age => age >= 18);
console.log("Task 1 - adultAges:", adultAges);

// Task 2: Write a function called `getAdultAges` that takes an array of ages as an argument
// and returns a new array with only the adult ages.
function getAdultAges(ageArray) {
  return ageArray.filter(age => age >= 18);
}
// Task 3: Use the `getAdultAges` function to create a new array called `adultAges2`.
const filteredAdultAges = getAdultAges(ages);
console.log("Task 3 - filteredAdultAges:", filteredAdultAges);
