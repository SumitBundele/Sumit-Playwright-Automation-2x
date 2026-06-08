//Single Quote

let a = 'Hello';

//Double Quote
let b = "World";

//Backticks (Template Literals)
let name = "Alice";
let c = `Hello, ${name}! 2+2=${2 + 2}`;
console.log(c);

//Mulyti-line String with Backticks
let d = `This is a multi-line string.
It can span multiple lines without needing escape characters.`;
console.log(d);

//Inbuilt way to create String 

console.log(String(123)); // "123"
console.log(String(true)); // "true"
console.log(String(null));  // "null"
console.log(String(undefined)); // "undefined"  
console.log(String([1, 2, 3, 4, 5])); // "1,2,3,4,5" -String arrya to string


String([1, 2, 3]);
console.log(String([1, 2, 3])); // "1,2,3" -String arrya to string