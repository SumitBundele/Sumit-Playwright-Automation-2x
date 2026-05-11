var a = 10; // Global Scoped

// var is function scoped and globally scoped.
// It is not block scoped. It can be redeclared and reassigned.
// It is hoisted to the top of its scope and initialized with undefined.
// It can be accessed before its declaration without throwing an error,
// but it will have the value undefined until it is assigned a value.
console.log(a);


function testsb() {
    console.log('Inside test function');
    // Function Scoped, local scope
    var a = 20;
    console.log(a);
    if (true) {
        // Block Scoped
        var a = 30;
        console.log(a);
    }
    // Local variable will always have higher priority than global variable to print
    console.log("Value of F--> :", a);
}
console.log("Value of G--> :", a);

testsb();

// var will always pick the latest value of the variable and it will override
// the previous value of the variable. It is function scoped and globally scoped,
// but not block scoped. It can be redeclared and reassigned.
// It is hoisted to the top of its scope and initialized with undefined.
// It can be accessed before its declaration without throwing an error,
// but it will have the value undefined until it is assigned a value.