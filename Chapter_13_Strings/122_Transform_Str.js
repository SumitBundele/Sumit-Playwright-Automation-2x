//Transform a string to uppercase letters
let str = "Hello, World! Hello";
let upperStr = str.toUpperCase();
console.log(upperStr); // "HELLO, WORLD!"   

//Transform a string to lowercase letters
let lowerStr = str.toLowerCase();
console.log(lowerStr); // "hello, world!"   

//Trim 
console.log(str.trim());
console.log("   Hello, World!   ".trim());
// "Hello, World!" - Removes leading and trailing whitespace

console.log(str.trimStart());
console.log(str.trimEnd());

//Replace
let newStr = str.replace("World", "JavaScript");
console.log(newStr);
// "Hello, JavaScript!" - Replaces "World" with "JavaScript"    

let newStr2 = str.replaceAll("Hello", "Hi Sumit");
console.log(newStr2);

let newStr3 = str.replace(/Hello/g, "Hi Vivan");
console.log('regex:', newStr3);

//split - Split a string into an array of substrings based on a specified delimiter
let r = "pass,fail,skip".split(",");
console.log(r);
// ["pass", "fail", "skip"] - Split string into an array using comma as a delimiter


//split and join

let r2 = "apple-orange-banana".split("-").join(" , ");
console.log(r2);
// "apple , orange , banana" - Split string into an array and then join with " , " as a separator   
