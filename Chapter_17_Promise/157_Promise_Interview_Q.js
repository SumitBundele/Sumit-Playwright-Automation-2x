let p = new Promise(function (resolve, reject) {
    resolve(50);
});
p.then(function (value) {
    console.log("Answer :", value)
})


//Reject

let p2 = new Promise(function (resolve, reject) {
    reject("Something not correct");
});
p2.catch(function (error) {
    console.log("Caught :", error)
});


// let P3 = Promise.resolve(20);
// P3.then(function (val) {
//     return val * 10;
// }).then(function (val) {
//     console.log("Results", val);
// });



Promise.resolve(1)
    .then(function (val2) {
        console.log(val2);
        return val2 + 1;
    })
    .then(function (val2) {
        console.log(val2);
        return val2 + 1;
    })
    .then(function (val2) {
        console.log(val2);
    });


Promise.resolve("start")
    .then(function (Value) {
        console.log(Value);
        throw new Error("Broek At Step 2");
    })
    .then(function () {

        console.log("this will Not run");
    }).catch(function (error) {
        console.log("Caught:", error.message);
    });
p

Promise.reject("Test Failed")
    .then(function (d) {
        console.log("Data:", d);

    }).catch(function (e) {
        console.log("Error:", e);
    }).finally(function () {
        console.log("Cleanup Done");

    });


let t1 = Promise.resolve("login:pass");
let t2 = Promise.resolve("search:pass");
let t3 = Promise.resolve("logout:pass");
Promise.all([t1, t2, t3]).then(function (result) {
    console.log(result);
})


let t01 = Promise.resolve("PASS");
let t02 = Promise.reject("FAIL");
let t03 = Promise.resolve("PASS");
Promise.all([t01, t02, t03]).then(function (result1) {
    console.log("ALL", result1);
}).catch(function (err1) {
    console.log("Stopped", err1);

});
