console.log(c);
console.log("This will not be printed");
console.log("This will not be printed");
console.log("This will not be printed");
console.log("This will not be printed");
// This line will not be executed due to the error above

const c = 10; // ReferenceError: Cannot access 'c' before initialization

//let and const are hoisted but not initialized, they are in a temporal dead zone (TDZ) until their declaration is evaluated.
// This means you cannot access them before their declaration, and doing so will result in a ReferenceError.