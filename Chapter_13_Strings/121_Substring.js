//Substring

let str = "Login_Test_PASS_001";
//slice Start End - Negative Index Supported

console.log(str.slice(0, 5)); // "Login"
console.log(str.slice(6, 10)); // "Test"
console.log(str.slice(-7, -4)); // "PASS"
console.log(str.slice(11)); // "PASS_001" - From index 11 to end



//substring Start End - Negative Index Not Supported
console.log(str.substring(0, 5)); // "Login"
console.log(str.substring(6, 10)); // "Test"
console.log(str.substring(-7, -4)); // "" - Negative index treated as 0 

