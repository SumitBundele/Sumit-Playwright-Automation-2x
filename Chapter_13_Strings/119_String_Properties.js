console.log(typeof "Hello"); // "string"
console.log(typeof "200"); // "string"

console.log("Hello, World!".length); // 13

console.log("-----------------------------".length); // 29

let str = "Hello, World!";

//Access by Index

console.log(str[0]); // "H"
console.log(str[7]); // "W"
console.log(str[12]); // "!"
console.log(str[13]); // undefined - Out of bounds  
console.log(str.at(-3)); // "r"
console.log(str.at(-6)); // "W"
//

console.log(str.charAt(0)); // "H"
console.log(str.charAt(7)); // "W"
console.log(str.charCodeAt(0));//72 - Unicode of "H"
console.log(str.charCodeAt(7)); //87 - Unicode of "W"







