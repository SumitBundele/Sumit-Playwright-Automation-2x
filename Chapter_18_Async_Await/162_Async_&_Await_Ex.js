// //when Step 2 Depends upon Step 1 then you must run them sequentially

// //Step --> Step 2

// //for normal function Await is not required
// function apiCall() {

// }

// let c = apiCall(); //no need ot await as it dosent have promis


// //if it becomed Async thne we have to use await

// async function apiCall() {
//     return ("Sumit")
// }

// let c = await apiCall();
//--------------------------------

function apiCall(name) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve(name, "200 OK")
        }, 2000);
    })
}

async function Sequence() {
    console.log("Starting the Test");
    let start = Date.now();

    let r1 = await apiCall("Login");
    console.log(r1);

    let r2 = await apiCall("Dashboard");
    console.log(r2);

    let r3 = await apiCall("Report");
    console.log(r3);

    console.log("Time:-" + (Date.now() - start) + " ms")

}
Sequence();
