let Config = {};

//keys and valus can be created outside the object literal using 
//dot notation or bracket notation
Config.baseURL = "https://api.example.com";
Config.timeout = 5000;
Config.testname = "Login Test";

console.log(Config); // { baseURL: "https://api.example.com", timeout: 5000, testname: "Login Test" }   

//key values can be deleted usig Delete operator]
delete Config.timeout;
console.log(Config); // { baseURL: "https://api.example.com", testname: "Login Test" } - timeout property deleted   

if (Config.timeout > 3000) {
    console.log("Timeout is too high, reducing to 3000ms.");
    Config.timeout = 3000;
}