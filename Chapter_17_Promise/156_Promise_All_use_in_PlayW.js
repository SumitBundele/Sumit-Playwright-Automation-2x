let checkAuth = Promise.resolve("Auth Ok");
let CheckDB = Promise.resolve("DB Ok");
let CheckCache = Promise.resolve("Cache OK");

Promise.all([checkAuth, CheckDB, CheckCache]).then(function (result) {
    console.log("all the checks are good");
});

//Using Promis.all()r esolve and reject both
Promise.all([
    Promise.resolve("OK"),
    Promise.reject("DB Down"),
    Promise.resolve("OK")
]).then(function (r) {
    console.log(r);
}).catch(function (error) {
    console.log("Failed", error);
})


//Promise.allsettled

Promise.allSettled([
    Promise.resolve("Test A Passes"),
    Promise.reject("Test B Filed"),
    Promise.resolve("TesT C Failed")
]).then(function (results) {
    results.forEach(function (r, i) {
        console.log("Test" + (i + 1) + ":", r.status, "-", r.value || r.reason);
    })
})
