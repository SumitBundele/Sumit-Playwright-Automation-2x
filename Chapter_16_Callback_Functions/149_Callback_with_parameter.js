function greetTester(name, callback) {
    console.log("Welcome," + name);
    callback();
}
greetTester("Sumit", function () {
    console.log("Lets start Plawright Testing");

});


//Callback with parameter
function runtest(testName, callback) {
    let Status = "PASS";
    callback(testName, Status);
}
runtest("Login Test", function (name, results) {
    console.log(name + "->" + results);
});


//Sync Callback for Each
let bugs = ["UI Glitch", "API Timeout", "Wrong Redirection"];
bugs.forEach(function (bug, i) {
    console.log("Bug#" + (i + 1) + "->" + bug);

});

console.log("Total Bugs:" + bugs.length);
