function outer() {
    let message = "Hello, I'm a closure!";
    console.log("Outer Called");
    function inner() {

        console.log(message); // Accessing the outer variable
    }
    return inner; // Return the inner function
}

let fn_inner = outer();
fn_inner(); // Call the inner function, which has access to the outer variable
