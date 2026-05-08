// 1. Starts with letter, underscore, or dollar sign
var myVar = 10;
var _count = 20;
var $price = 30;

// 2. Cannot start with a digit
// Invalid: var 1stValue = 40; // syntax error
var firstValue = 40;

// 3. Can contain letters, digits, underscore, and dollar sign
var total2 = 50;
var user_name = "Sumit";
var price$ = 60;

// 4. Case-sensitive identifiers
var value = 1;
var Value = 2;
var VALUE = 3;

// 5. Cannot include spaces or punctuation
// Invalid: var my var = 5; // syntax error
// Invalid: var user-name = "abc"; // syntax error
var userName = "abc";

// 6. Cannot be a reserved JavaScript keyword
// Invalid: var for = 1; // syntax error
// Invalid: var class = "demo"; // syntax error
var forLoop = 1;
var className = "demo";

// 7. Unicode letters are allowed
var π = 3.14;
var नाम = "Sumit";

// 8. Should not start with a Unicode escape that becomes a digit
// Invalid: var \u0031abc = 1; // becomes 1abc, invalid
var abc1 = 1;

console.log(myVar, _count, $price, firstValue, total2, user_name, price$, value, Value, VALUE, userName, forLoop, className, π, नाम, abc1);