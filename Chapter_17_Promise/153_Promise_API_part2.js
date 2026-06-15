let apiCall = new Promise(function (resolve, reject) {
    reject("505 Error");
});

apiCall.then(function (data) {
    console.log("success if resolve");
}).catch(function (error) {
    console.log(error);

});

//.Catch()only runs when the promise is rejected
//.then()will  be skipped in above example as its not resolved
