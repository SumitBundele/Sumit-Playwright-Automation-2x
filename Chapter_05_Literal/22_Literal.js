let age = "Sumit";// String literal assigned to variable age
let isStudent = true; // Boolean literal assigned to variable isStudent 
let pi = 3.14; // Numeric literal assigned to variable pi
let name = "John Doe"; // String literal assigned to variable name
let isActive = false; // Boolean literal assigned to variable isActive
let emptyValue = null; // Null literal assigned to variable emptyValue
let undefinedValue; // Undefined literal assigned to variable undefinedValue

//typeof operator
console.log("Type of age:", typeof age);
// Output: Type of age: string
console.log("Type of isStudent:", typeof isStudent);
// Output: Type of isStudent: boolean
console.log("Type of pi:", typeof pi);
// Output: Type of pi: number
console.log("Type of name:", typeof name);
// Output: Type of name: string
console.log("Type of isActive:", typeof isActive);
// Output: Type of isActive: boolean
console.log("Type of emptyValue:", typeof emptyValue);
// Output: Type of emptyValue: object (this is a known quirk in JavaScript)
console.log("Type of undefinedValue:", typeof undefinedValue);
// Output: Type of undefinedValue: undefined