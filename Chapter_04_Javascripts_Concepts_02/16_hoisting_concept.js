
// JavaScript Engine
// Line by line execution
// Also does JIT compilation

// JS will automatically initialize variables with the hoist flag

console.log(Hoisting);
var Hoisting = "Hello Sumit";
console.log(Hoisting);

// Behind the scenes
// var Hoisting;  <------------ hoisted with undefined
// console.log(Hoisting);  <---- undefined
// Hoisting = "Hello Sumit";  <--- assignment happens here
// console.log(Hoisting); <----- Hello Sumit

// Why hoisting? Because JS compiler assumes you will use this variable later
// in the code and it will automatically initialize the variable with undefined
// to avoid ReferenceError. It is a behavior of JavaScript where variable and
// function declarations are moved to the top of their containing scope during
// the compilation phase. This allows you to use variables and functions before
// they are declared in the code, without causing a ReferenceError. However,
// only the declarations are hoisted, not the initializations. So if you try to
// access a variable before it is initialized, it will have the value undefined.


