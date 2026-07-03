interface TestHook {
    (testName: string): void; //ananymous function with a parameter testName of type string and return type void
}


//In interface we can have a beforeEach hook and afterEach hook
//beforehook and afterhook will be of type TestHook with function signature of (testName: string): void

let beforeEachHook: TestHook = function (testName: string): void {
    console.log("Before Setting Up " + testName);
}

let afterEachHook: TestHook = function (testName: string): void {
    console.log("After Each Test " + testName);
}



//Calling the hooks

//hiding the interface code total Abstracting the interface code and using it in a function

beforeEachHook("Login Test");


interface TestCase {
    id: number;
    name: string;
    status: string;
    duration: number;

}
let Test1: TestCase = {
    id: 1,
    name: "Login with Valid Credential",
    status: "Passed",
    duration: 10
};
console.log("TC-" + Test1.id + ":" + Test1.name + ":" + Test1.status);

afterEachHook("Login Test");

//all interfaces can be hidden in a function
// and can be used in the function to make it more readable and maintainable -this is called Abstraction

//we can put such interfaces into playwright configuration file
//and use it in the test cases to make it more readable and maintainable
//it will be completely hidden from the test cases and can be used in the test cases
