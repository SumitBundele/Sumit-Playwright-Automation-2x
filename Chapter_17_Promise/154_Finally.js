let testRun = new Promise(function (resolve, reject) {
    let apiCall = false;
    if (apiCall) {
        resolve("Status : Done");
    } else {
        reject("Assertion Failed");
    }
});

testRun.then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.log(error);
}).finally(function () {
    console.log("Finally function wil be executed any how in any condition");
})
