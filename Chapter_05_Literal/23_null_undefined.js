/*
==================== NULL vs UNDEFINED ====================

DIFFERENCE BETWEEN NULL AND UNDEFINED:

1. NULL:
   - Null is an ASSIGNMENT VALUE
   - It represents the intentional absence of any object value
   - It must be EXPLICITLY assigned by the programmer
   - Type of null: "object" (this is a known quirk in JavaScript)
   - Used when we want to indicate "no value" on purpose

2. UNDEFINED:
   - Undefined means a variable has been declared but NO VALUE has been assigned
   - It is the DEFAULT value for uninitialized variables
   - JavaScript automatically assigns undefined
   - Appears when function doesn't return a value
   - Type of undefined: "undefined"

==================== EXAMPLES ====================
*/

// Example 1: Explicit NULL assignment
let user = null; // Programmer intentionally set it to null (no value)
console.log("user is:", user); // Output: user is: null
console.log("Type of user:", typeof user); // Output: Type of user: object

// Example 2: UNDEFINED - variable declared but not initialized
let userName;
console.log("userName is:", userName); // Output: userName is: undefined
console.log("Type of userName:", typeof userName); // Output: Type of userName: undefined

// Example 3: Function returning undefined
function checkValue() {
    let result = 10;
    // No return statement, so function returns undefined
}
let functionResult = checkValue();
console.log("functionResult is:", functionResult); // Output: functionResult is: undefined

// Example 4: Accessing non-existent object property
let person = { name: "Sumit" };
console.log("person.age is:", person.age); // Output: person.age is: undefined

// Example 5: Function parameter not provided
function greet(name) {
    console.log("Name parameter is:", name); // Will be undefined if not passed
}
greet(); // Output: Name parameter is: undefined
greet("John"); // Output: Name parameter is: John

// Example 6: Comparison between null and undefined
console.log("\n--- Comparisons ---");
console.log("null == undefined:", null == undefined); // Output: true (loose equality)
console.log("null === undefined:", null === undefined); // Output: false (strict equality)

// Example 7: Checking for null or undefined
let data = null;
if (data === null) {
    console.log("data is explicitly null");
}

let info;
if (info === undefined) {
    console.log("info is undefined - not initialized");
}

// Example 8: Real-world usage
let response = null; // API call will set this, null means we cleared it
let temp; // temp is undefined until we use it

console.log("response:", response); // Output: response: null
console.log("temp:", temp); // Output: temp: undefined