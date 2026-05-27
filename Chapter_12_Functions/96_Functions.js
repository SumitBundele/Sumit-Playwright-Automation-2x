//Functions

// 1. Define / Definition a Function.
// 2. Calling of Functions


// > **Definition**

// **function** name(param){

// // code that you want to execute.

// }

// > **Calling**

// name(90);

// //A Function a standalone block of code that performs a specific task.
// // It is not associated with any object.
// function greet(name) {
//     return `Hello, ${name}`;
// }
// const result = greet("Alice"); // standalone call
// console.log(result); // "Hello, Alice"
// Method
// //A method is a function that is a property of an object.
// //  It operates on the data within that object.
// const person = {
//     name: "Alice",
//     greet: function () {        // this is a method
//         return `Hello, ${this.name}`;
//     }
// };
// console.log(person.greet()); // "Hello, Alice"


//Define -- Step 1
function greet() {
    console.log("Hi sumit,How are you")
}

//No Output untill called
//Calling Function -- Step 2
greet()

