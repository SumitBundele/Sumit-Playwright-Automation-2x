// Basic identifiers
var name = "Sumit";
var age = 30;
var isStudent = false;

// camelCase example (common in JavaScript)
var firstName = "Sumit";
var lastName = "Gupta";
var fullName = firstName + " " + lastName;

// snake_case example
var first_name = "Sumit";
var last_name = "Gupta";
var full_name = first_name + " " + last_name;

// PascalCase example (often used for classes)
var UserName = "SumitGupta";
var UserAge = 30;

// Hungarian notation examples (prefix indicates type or purpose)
var strUserName = "SumitGupta"; // str = string
var numAge = 30; // num = number
var boolIsActive = true; // bool = boolean
var arrScores = [85, 90, 95]; // arr = array
var objUser = { firstName: "Sumit", lastName: "Gupta" }; // obj = object

// UPPER_SNAKE_CASE example (often used for constants)
var MAX_COUNT = 100;
var MIN_VALUE = 0;

// invalid kebab-case example (cannot use hyphen in identifiers)
// var first-name = "Sumit"; // syntax error

// allowed special starting characters
var $price = 100;
var _count = 50;

console.log(name, age, isStudent, fullName, full_name, UserName, MAX_COUNT, $price, _count);