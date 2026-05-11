var a = 10; // Globle Scoped//
//var is function scoped and globally scoped. It is not block scoped. It can be redeclared and reassigned. It is hoisted to the top of its scope and initialized with undefined. It can be accessed before its declaration without throwing an error, but it will have the value undefined until it is assigned a value.
console.log(a); // Globle Scope//


function testsb() {
    console.log('Inside test function');
    var a = 20; // Function Scoped,local scope//
    console.log(a);
    if (true) {
        var a = 30; // Block Scoped,local veriable 
        console.log(a);
    }
    //local veriable will be always having the hight priority than global variable to print//
    console.log(a);
}

testsb();