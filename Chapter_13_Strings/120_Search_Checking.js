//Searching & Checking

//Searching for a value in an array
let arr = [1, 2, 3, 4, 5];
console.log(arr.includes(3));

let url = ("https://www.example.com");
//includes

console.log(url.includes("example")); // true
console.log(url.includes("test")); // false
//startsWith
console.log(url.startsWith("https")); // true
console.log(url.startsWith("http")); // true
console.log(url.startsWith("www")); // false    

//endsWith
console.log(url.endsWith(".com")); // true
console.log(url.endsWith(".org")); // false 

//indexOf
console.log(url.indexOf("example"));
//lastIndexOf
console.log(url.lastIndexOf("e")); // 12 - Last occurrence of "e"
//


console.log(url.indexOf("test")); // -1 - Not found
//search
console.log(url.search(/example/)); // 8 - Position of "example"
console.log(url.search(/com/)); // 16 - Position of "com"      


//REGEX - Regular Expression
let regex = /example/;
console.log(regex.test(url)); // true       
