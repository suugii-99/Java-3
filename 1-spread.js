
const fruits = ["Apple", "Banana", "Orange"]
const startingFruits = ["Pear", "Melon", "Kiwi"]

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
  };

// Task 1: Use the spread operator to create a new array called `moreFruits` and add "Mango"
// and "Pineapple" to the end of the `fruits` array.  
const moreFruits = [...fruits, "Mango", "Pineapple"];
console.log("Task 1 - moreFruits:", moreFruits);


// Task 2: Use the spread operator to create a new array called `totalFruits` that starts with
// the `startingFruits` array and ends with the `moreFruits` array. Use console.log to print `totalFruits`.
const totalFruits = [...startingFruits, ...moreFruits];
console.log("Task 2 - totalFruits:", totalFruits);


// Task 3: Use the spread operator to create a new object called `updatedCar` and change the year to 2022.
// Use console.log to print `updatedCar`.
const updatedCar = {...car, year: 2022};
console.log("Task 3 - updatedCar:", updatedCar);

// Task 4: Use the spread operator to create a new object called `coloredCar`
// add a new property `color` with the value "Red" to the `updatedCar` object.
// Use console.log to print `coloredCar`.
const coloredCar = {...updatedCar, color: "Red"};
console.log("Task 4 - coloredCar:", coloredCar);


// Task 5: Create a function called `updateCarModel` that takes an object and a new model as arguments
// and returns a new object with the updated model using the spread operator.
function updateCarModel(carObject, newModel) {
    return {...carObject, model: newModel};
}


// Task 6: Use the `updateCarModel` function to update the model of `coloredCar` to "Camry" and store
// it in a variable called `newModelCar`. Use console.log to print `newModelCar`.
const newModelCar = updateCarModel(coloredCar, "Camry");
console.log("Task 6 - newModelCar:", newModelCar);