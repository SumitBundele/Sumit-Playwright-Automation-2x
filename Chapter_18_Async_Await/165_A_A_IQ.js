// async function sayHello() {
//     return "hello,QA";
// }
// sayHello().then(function (msg) {
//     console.log(msg);

// })

//Output = hello,QA

//----------------------------------IQ 02------
// async function getStatus() {
//     let status = await Promise.resolve(200);
//     console.log("StatusCode", status);
// }

// getStatus();

//-------------------------------IQ 03---

async function testFlows() {
    let Step1 = await Promise.resolve("Open Browser");
    console.log(Step1);

    let Step2 = await Promise.resolve("Clicked Login buitton");
    console.log(Step2);

    let Step3 = await Promise.resolve("Verified Dashboared");
    console.log(Step3);

}

testFlows();
