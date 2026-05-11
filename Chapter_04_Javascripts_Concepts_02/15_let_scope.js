let a = 10; // Global Scoped

// let is block scoped.
// It can be redeclared within a different scope.
// It is hoisted to the top of its scope but not initialized.
// It cannot be accessed before its declaration and will throw a
// ReferenceError if you try to do so.
// but it will have the value undefined until it is assigned a value.
console.log(a);


function testsb() {
    console.log('Inside test function');
    // Function Scoped, local scope
    let a = 20;
    console.log(a);
    if (true) {
        // Block Scoped
        let a = 30;
        console.log(a);
    }
    // Local variable will always have higher priority than global variable to print
    console.log("Value of F--> :", a);
}
console.log("Value of G--> :", a);

testsb();