let testresults = ["pass", "fail", "pass", "skip"];
testresults.forEach(function (result, index) {
    console.log("Test" + index + "=>" + result);
})
//This is perfect example of synchronus callback function
//  where the anonimus item will take the item 1 by 1
//it will take the index 1 by 1
//it will take the Result 1 by 1
//it will print the value 1 by 1
