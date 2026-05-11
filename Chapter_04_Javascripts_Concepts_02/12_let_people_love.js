let a = 10; // Global Scoped, block scoped

// Modern way to declare variable is let and const.
// let is block scoped and can be reassigned but cannot be redeclared.
// It is hoisted to the top of its scope but not initialized.
// It cannot be accessed before its declaration, and it will throw a
// ReferenceError if you try to do so.

let retryCount = 0;
retryCount = retryCount + 1;
// Reassignment is allowed
retryCount = retryCount + 1;
console.log("Retry Attempt:", retryCount);

// Redeclaration is not allowed with let
// let retryCount = 5; // This would cause a SyntaxError

let teststatus = "Pending";
if (teststatus === "Pending") {
    let executiontime = 1200; // Block Scoped
    console.log("Status:", teststatus);
    console.log("Execution Time:", executiontime);
}

//console.log(executiontime);
// ReferenceError: executiontime is not defined

/*Example of block
{ } ----Blocked scope
if () { }

function () { }
*/


//let = loyal
//var = variable ,traitor