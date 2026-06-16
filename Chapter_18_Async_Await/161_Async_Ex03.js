//Basics of async and await

async function getTestResult() {
    return "Pass";

}

getTestResult().then(function (R) {
    console.log(R);
});
