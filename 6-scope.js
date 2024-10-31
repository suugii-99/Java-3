// Task 1: Declare a variable called `globalVar` with the value "I am global".
var globalVar = "I am global";

// Task 2: Create a function called `testScope` that declares a variable called
// `localVar` with the value "I am local".
function testScope() {
    var localVar = "I am local"; 

// Task 3: Inside `testScope`, print both `globalVar` and `localVar`.
    console.log(globalVar); // This will output: "I am global"
    console.log(localVar);   // This will output: "I am local"
}


testScope();

// Task 4: Outside of the function, try to print `localVar` and observe the result.
try {
    console.log(localVar);
} catch (error) {
    console.error("Error:", error.message); 
}
