//Pyramid of doom Example
function openbrowser() {
    return new Promise(function (resolve) {
        resolve("Open The Browser");
    })

}

function GotologinPage() {
    return new Promise(function (resolve) {
        resolve("Login Page Loaded");
    });

}

function EnterCredentials() {
    return new Promise(function (resolve) {
        resolve("Enter valid Credentials");
    });

}

function ClickLogin() {
    return new Promise(function (resolve) {
        resolve("Login button Clicked");
    });

}




// openbrowser()
//     .then(function (msg) {
//         console.log("Step1:", msg);
//         return GotologinPage();
//     }).then(function (msg) {
//         console.log("Step2:", msg);
//         return EnterCredentials();
//     }).then(function (msg) {
//         console.log("Step3:", msg);
//         return ClickLogin();
//     }).then(function (msg) {
//         console.log("Step4:", msg);
//     }).catch(function (error) {
//         console.log("Error", error);
//     }).finally(function () {
//         console.log("Done Execution")
//     });


async function runTheE2E() {  //function defined
    let msg1 = await openbrowser();
    console.log("Step1:", msg1);
    let msg2 = await GotologinPage();
    console.log("Step1:", msg2);
    let msg3 = await EnterCredentials();
    console.log("Step1:", msg3);
    let msg4 = await ClickLogin();
    console.log("Step1:", msg4);

}

runTheE2E(); //function called
