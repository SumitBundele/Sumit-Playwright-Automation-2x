//Primative vs Reference Types in JavaScript
//Primitive Types: Stored in Stack Memory
let num1 = 10;
let num2 = num1;
num2 = 20;
console.log(num1); // 10
console.log(num2); // 20    

//Reference Types: Stored in Heap Memory
let obj1 = { name: "John" };
let obj2 = obj1;
obj2.name = "Alice";
console.log(obj1.name);
// "Alice" - Change in obj2 reflects in obj1 because they reference the same object
console.log(obj2.name);
// "Alice" - obj2 also reflects the change