//Function within Function
//We never use this in Automation but it is good to know about it.
let g_x = 10;

function outer() {
    let x = 20;

    function inner() {
        let y = 30;

        console.log(x);   // 20
        console.log(y);   // 30
        console.log(g_x); // 10
    }

    inner(); // Call inner function
}

outer();

// inner() can access:

// y (its own local variable)
// x (from its parent outer() function)
// g_x (global variable)