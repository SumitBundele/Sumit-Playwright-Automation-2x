let firstname = "Sumit";
let fullname = `My name is ${firstname} Bundele`;// Template literal with embedded expression
console.log(fullname); // Output: My name is Sumit Bundele


////Real life example of template literal
let env = "staging";
env = "production";
const userid = 12345;
const url = `https://${env}.example.com/user/${userid}`; // Template literal with multiple embedded expressions
console.log(url); // Output: https://staging.example.com/user/12345