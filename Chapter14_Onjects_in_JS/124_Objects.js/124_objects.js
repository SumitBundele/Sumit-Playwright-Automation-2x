let object = {};

let obj1 = {
    name: "John",
    age: 30,
    isStudent: false,
};


//object {}
//Key: Value e.g name: "John" - name is key and "John" is value

//objects comes under{Reference Type} - Stored in Heap Memory
//object is a collection of key-value pairs 

console.log(obj1.name); // "John"
console.log(obj1.age); // 30
console.log(obj1.isStudent); // false

//Accessing non-existing property
console.log(obj1.address); // undefined 

//Adding new property
obj1.address = "123 Main St";
console.log(obj1.address); // "123 Main St"
//Updating existing property
obj1.age = 31;
console.log(obj1.age); // 31
//Deleting a property
delete obj1.isStudent;
console.log(obj1.isStudent); // undefined - Property deleted    


//object are always copy by reference
let obj2 = obj1;
console.log(obj2.name);
// "John" - obj2 references the same object as obj1
obj2.name = "Alice";
console.log(obj1.name); // "Alice" - Change in obj2 reflects in obj1 because they reference the same object 


if (obj1 === obj2) {
    console.log("true");
} else {
    console.log("false");
}
//true - obj1 and obj2 reference the same object in memory