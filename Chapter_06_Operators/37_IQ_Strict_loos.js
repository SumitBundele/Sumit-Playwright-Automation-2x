console.log(0 == '');
// Output: true (loose equality, type coercion occurs)
console.log(0 == '0');
// Output: true (loose equality, type coercion occurs)
console.log("" == "0");//transitivity broken!
// Output: false (loose equality, type coercion occurs)
console.log(null == undefined);
// Output: true (loose equality, type coercion occurs)
console.log(null === undefined);
// Output: false (strict equality, no type coercion)
