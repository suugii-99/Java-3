// Task 1: Write a for loop to print numbers from 1 to 5.
for (let i = 1; i <= 5; i++) {
    console.log("Task 1 - Number:", i);
  }
  

  let j = 10;
  while (j <= 15) {
    console.log("Task 2 - Number:", j);
    j++;
  }
  
// Task 2: Create a while loop that prints the numbers 10 to 15.
// Task 3. Write for-loop that loops through the array `numbers`
// compare every number with the variable `lowest`.
// If the number is lower than `lowest` update `lowest` to the current number
// Use console.log to print `lowest`.
  const numbers = [9, 10, 17, 34, 2, 4, 100];
  let lowest = numbers[0];
  
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < lowest) {
      lowest = numbers[i];
    }
  }
  console.log("Task 3 - Lowest number:", lowest);
  
  function getLowest(arr) {
    let lowest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < lowest) {
        lowest = arr[i];
      }
    }
    return lowest;
  }
  
  
  const lowestNumber = getLowest(numbers);
  console.log("Task 4 - Lowest number using getLowest function:", lowestNumber);
  