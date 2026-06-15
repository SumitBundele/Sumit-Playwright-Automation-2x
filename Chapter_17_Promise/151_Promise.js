let order = new Promise(function (resolve, rejected) {
    let foodisReady = true;
    if (foodisReady) {
        resolve("Pizza is deliverd,Food is ready ")
    } else {
        rejected("order canceled due to rain");
    }

});
console.log(order);
