function cafe(CafeMenuItme, CallwhenTableisReady) {
    console.log("Finding---1");
    console.log("Finding---2");
    console.log("Finding---3");
    CallwhenTableisReady();
}

function CallwhenTableisReady() {
    console.log("Calling 9049391677");
}
//1
cafe("burger", CallwhenTableisReady);

//2
cafe("Pizza", function () {
    console.log("calling another number 7720870194");
});

//3

cafe("noodles", () => {
    console.log("calling another number 7720870999");
});
