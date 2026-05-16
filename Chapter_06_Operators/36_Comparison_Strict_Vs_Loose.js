// number == string (loose equality)
// number === string (strict equality)
console.log(5 == '5');
// Output: true (loose equality, type coercion occurs)
console.log(5 === '5');

// Output: false (strict equality, no type coercion)        

console.log(3 == '3'); // Output: true (loose equality, type coercion occurs)
console.log(3 === '3'); // Output: false (strict equality, no type coercion)        

console.log(0 == "  ");
// Output: true (loose equality, type coercion occurs)
console.log(0 === "  ");
// Output: false (strict equality, no type coercion)

console.log(false == "1");
// Output: false (loose equality, type coercion occurs)
console.log(false === "1");
// Output: false (strict equality, no type coercion) 

console.log(true == "3");
// Output: true (loose equality, type coercion occurs)
console.log(true === "3");
// Output: false (strict equality, no type coercion) 

console.log(null == undefined);
// Output: true (loose equality, type coercion occurs)
console.log(null === undefined);
// Output: false (strict equality, no type coercion)
console.log(5 != '5');
// Output: false (loose inequality, type coercion occurs)
console.log(5 !== '5');
//either value is not equal or type is not equal
// Output: true (strict inequality, no type coercion)      
