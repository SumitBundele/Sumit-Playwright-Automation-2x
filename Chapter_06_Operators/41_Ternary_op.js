let sumit_age = 18;
let result = sumit_age >= 18 ? "Sumit will go Goa" : "No Goa for Sumit";
console.log(result); // Output: "Sumit will go Goa"

sumit_age = 19;
result = sumit_age > 20 ? "Sumit will go Goa" : "No Goa for Sumit";
console.log(result); // Output: "No Goa for Sumit"  


//Real time API result testing 
let actulStatuscode = 200;
let expectedStatuscode = 200;
let status = actulStatuscode === expectedStatuscode ? "Test Passed" : "Test Failed";
console.log(status); // Output: "Test Passed"

let actulStatuscode_2 = 404;
let expectedStatuscode_2 = 200;
let status_2 = actulStatuscode_2 === expectedStatuscode_2 ? "Test Passed" : "Test Failed";
console.log(status_2); // Output: "Test Failed"

let environment = "Staging";
let url = environment === "Staging" ? "https://staging.api.com" : "https://production.api.com";
console.log(url); // Output: "https://staging.api.com"  

let environment_2 = "Production";
let url_2 = environment_2 === "Staging" ? "https://staging.api.com" : "https://production.api.com";
console.log(url_2); // Output: "https://production.api.com"     


//Boolean value
let isCI = true;
let buildType = isCI ? "CI Build" : "Local Build";
console.log(buildType); // Output: "CI Build"


//condition ? true : false


//SLA - Service Level Agreement
let responsetime = 850; // in milliseconds
let SLA = 1000;
let performance = responsetime <= SLA ? "Good Performance" : "Poor Performance";
console.log(`${performance} with response time of ${responsetime} ms`); // Output: "Good Performance with response time of 850 ms"

//Nested ternary operator -multiple conditions
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log(`Score: ${score}, Grade: ${grade}`); // Output: "Score: 85, Grade: B"

let age = 26;
let category = age > 25 ? "Sumit will go to goa" : "Sumit will not go to goa"; // age is 26, so it will evaluate to true and return "Sumit will go to goa"
console.log(`Age: ${age}, Category: ${category}`); // Output: "Age: 26, Category: Sumit will go to goa"

let age_sumit02 = 45;
let category_sumit02 = age_sumit02 > 18 ? (age_sumit02 > 26 ? "Drink" : "No Drionk") : "No GOA";
// age is 45, so it will evaluate to true and return "Sumit will go to g.log(`Age: ${age_sumit02}, Category: ${category_sumit02}`); // Output: "Age: 45, Category: Sumit will go to goa"
console.log(category_sumit02); // Output: "Drink"

//

let statusCode = 404;
let category2 =
    statusCode < 300
        ? "Success"
        : statusCode < 404
            ? "Redirect Error"
            : statusCode < 500 ? "Client Error" : "Server Error";
console.log(`Status Code: ${statusCode}, Category: ${category2}`); // Output: "Status Code: 404, Category: Client Error" 


//

let temp = 35;
let weather = (temp >= 40) ? " Very Hot" :
    (temp >= 30) ? "Hot" :
        (temp >= 20) ? "Warm" :
            (temp >= 10) ? "Cool" : "Cold";
console.log(`Temperature: ${temp}°C, Weather: ${weather}`);
// Output: "Temperature: 35°C, Weather: Hot"