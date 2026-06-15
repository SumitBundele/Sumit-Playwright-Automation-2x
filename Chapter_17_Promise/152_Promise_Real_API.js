let apiCall = new Promise(function (resolve, reject) {
    resolve({
        status: 200, body: "User Data"
    })
});

apiCall.then(function (response) {
    console.log(response)
});


apiCall.then(function (response) {
    console.log(response.body)
});

apiCall.then(function (response) {
    console.log(response.status)
});

//.then() runs only when the promise resolves successfully
