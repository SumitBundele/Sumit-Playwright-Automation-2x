/*
==================== STRING QUOTES IN JAVASCRIPT ====================

JavaScript supports three types of quotes for strings:
1. Single quotes: 'Hello'
2. Double quotes: "Hello"
3. Backticks: `Hello` (Template literals)

BACKTICKS are special - they create TEMPLATE LITERALS with advanced features!

==================== SINGLE EXAMPLE SHOWING ALL DIFFERENCES ====================
*/

let name = "Sumit";
let age = 25;
let city = "Mumbai";

// SINGLE QUOTE EXAMPLE
let singleQuote = 'Hello, my name is ' + name + ' and I am ' + age + ' years old. I live in ' + city + '.';
console.log("Single Quote Result:");
console.log(singleQuote);

// DOUBLE QUOTE EXAMPLE
let doubleQuote = "Hello, my name is " + name + " and I am " + age + " years old. I live in " + city + ".";
console.log("\nDouble Quote Result:");
console.log(doubleQuote);

// BACKTICK EXAMPLE (TEMPLATE LITERAL) - THE MAGIC ONE!
let backtickTemplate = `Hello, my name is ${name} and I am ${age} years old. I live in ${city}.

This is a multi-line string!
No need to use + for concatenation.
I can even do calculations: ${age + 5} years from now.

Template literals are awesome! 🎉`;
console.log("\nBacktick Template Literal Result:");
console.log(backtickTemplate);

/*
==================== KEY DIFFERENCES SUMMARY ====================

SINGLE QUOTES (') & DOUBLE QUOTES ("):
- Basic string literals
- No string interpolation
- No multi-line support
- Must use + for concatenation
- Can contain the other quote type inside

BACKTICKS (`) - TEMPLATE LITERALS:
- ✅ String interpolation with ${expression}
- ✅ Multi-line strings (no \n needed)
- ✅ Embedded expressions and calculations
- ✅ Can contain both ' and " without escaping
- ✅ Better for complex string building
- ✅ More readable and maintainable

==================== WHEN TO USE EACH ====================

Use SINGLE or DOUBLE quotes for:
- Simple strings
- When you need the other quote type inside
- Traditional string concatenation

Use BACKTICKS for:
- String interpolation
- Multi-line strings
- Complex string templates
- HTML templates
- SQL queries
- Any dynamic string building

==================== ADVANCED BACKTICK FEATURES ====================
*/

// Expression evaluation
let a = 10, b = 20;
console.log(`Sum: ${a + b}`);           // Sum: 30
console.log(`Product: ${a * b}`);       // Product: 200

// Function calls in template literals
function getGreeting(time) {
    return time < 12 ? "Good morning" : "Good afternoon";
}
let hour = 14;
console.log(`${getGreeting(hour)}, ${name}!`); // Good afternoon, Sumit!

// Nested template literals
let user = { firstName: "Sumit", lastName: "Bundele" };
console.log(`Welcome ${`${user.firstName} ${user.lastName}`}!`); // Welcome Sumit Bundele!


let highlighted = highlight`Hello ${name}, you are ${age} years old!`;
console.log("\nTagged Template Result:");
console.log(highlighted); // Hello <strong>Sumit</strong>, you are <strong>25</strong> years old!