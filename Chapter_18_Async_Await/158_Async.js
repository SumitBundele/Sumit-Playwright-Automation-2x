//whenever you see a function it will be Async
//whenever you see a Statement it will be Await
async function testApi() {
    try {
        let result = await Promise.reject("503 Reject");
    }
    catch (error) {
        console.log("Error", error);
    }
    finally {
        console.log("Cleanup done");
    }
};

testApi();
