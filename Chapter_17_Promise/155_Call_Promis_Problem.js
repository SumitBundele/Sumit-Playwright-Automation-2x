// function openbrowser(callback) {

// }
// //     console.log("Step1 opening the chrome browser");
// //     setTimeout(() => {

// //         callback();

// //     }, 2000);
// // }

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




openbrowser()
    .then(function (msg) {
        console.log("Step1:", msg);
        return GotologinPage();
    }).then(function (msg) {
        console.log("Step2:", msg);
        return EnterCredentials();
    }).then(function (msg) {
        console.log("Step3:", msg);
        return ClickLogin();
    }).then(function (msg) {
        console.log("Step4:", msg);
    }).catch(function (error) {
        console.log("Error", error);
    }).finally(function () {
        console.log("Done Execution")
    });
