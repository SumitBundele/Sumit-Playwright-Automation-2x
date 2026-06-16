//Async await Parallel

function apiCall(name) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve(name, "200 OK")
        }, 2000);
    })
}

//promise.all will check all are executed parallely
async function parallel() {
    let [r1, r2, r3] = await Promise.all([
        apiCall = ("Auth Service"),
        apiCall = ("User Account Creation"),
        apiCall = ("Support Page API")
    ])

    console.log(r1);
    console.log(r2);
    console.log(r3);



}
parallel();
