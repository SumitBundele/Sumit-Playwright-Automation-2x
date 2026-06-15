//Why peope dont use 1 by 1 Callback

//lets take an exanle for Real login scenario
//End to end Login with the App.vwo.com

//Pyramid of DOM


//openbrowser()
//GotologinPage()
//EnterCredentials()
//ClickLogin()


function openbrowser(callback) {
    console.log("Step1 opening the chrome browser");
    setTimeout(() => {

        callback();

    }, 2000);
}

function GotologinPage(callback) {
    console.log("Step2 : Login Page Loaded")
    setTimeout(() => {

        callback();

    }, 1000);
}

function EnterCredentials(callback) {
    //console.log("openening the chrome browser");
    setTimeout(() => {
        console.log("Step3 : Credentials Entered")
        callback();

    }, 1000);
}


function ClickLogin(callback) {
    //console.log("openening the chrome browser");
    setTimeout(() => {
        console.log("Step4 : Login Button clicked")
        callback();

    }, 1000);
}

//This is example of callback Hell

openbrowser(function () {
    GotologinPage(function () {
        EnterCredentials(function () {
            ClickLogin(function () {
                console.log("Test completed");
            })
        })
    })
})
