//String Conversion
//Using String() function to convert other data types to string
console.log(String(123)); // "123"
console.log(String(true)); // "true"
console.log(String(null));  // "null"           
console.log(String(undefined));  // "undefined"

(200).toString(); // "200"
console.log((200).toString()); // "200"
console.log([1, 2, 3].toString()); // "1,2,3" - Array to string 


parseInt("123"); // 123
console.log(parseInt("123")); // 123
console.log(parseInt("123abc")); // 123 - Parses until it encounters a non-digit character
console.log(parseInt("abc123")); // NaN - No valid number at the start  