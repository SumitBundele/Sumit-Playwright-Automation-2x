// For values that should not change
// Const is also block scoped and cannot be redeclared or reassigned.
// It is hoisted to the top of its scope but not initialized.
// It cannot be accessed before its declaration and will throw a
// ReferenceError if you try to do so.

const pi = 3.14;
console.log("Value of pi:", pi);

const BASE_URL = "https://app.thetestingacademy.com";
// BASE_URL = "https://app.thetestingacademy.com";
// //TypeError: Assignment to constant variable.