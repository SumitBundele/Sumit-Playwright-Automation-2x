console.log(APP_URL);
console.log("Let Hoisting Example:");

if (true) {



}

//var APP_URL = "https://example.com/api";

// This will be hoisted and initialized with undefined

//let APP_URL = "https://example.com/api";
// This will cause a ReferenceError because APP_URL is in the temporal dead zone (TDZ) until its declaration is evaluated

const APP_URL = "https://example.com/api";
// This will cause a ReferenceError because APP_URL is in the temporal dead zone (TDZ) until its declaration is evaluated