//Higher Order Function
//A function that takes another function as an argument or returns a function as a result is called a higher-order function.
//Higher-order functions are a powerful tool in JavaScript and are used extensively in functional programming.
// They allow you to create more flexible and reusable code by abstracting away common patterns of behavior.

function higherOrderFunction(testFn, testName) {
    let result = testFn();
    return result;
}

function logintest() {
    return "pass";

}
function logintest2() {
    return "fail";
}

higherOrderFunction(logintest, "Login Test"); // pass
console.log(higherOrderFunction(logintest, "Login Test")); // pass

higherOrderFunction(logintest2, "Login Test"); // fail
console.log(higherOrderFunction(logintest2, "Login Test")); // fail