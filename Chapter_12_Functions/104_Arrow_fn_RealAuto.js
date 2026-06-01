//if (StatusCode >=200 && StatusCode< 300);

//1.Normal function
function ValidateStatus(status) {
    if (status >= 200 && status < 300) {
        console.log("Status is Good")
    }
    else {
        console.log("Status is not good")
    }
}

ValidateStatus(210);
//Function as Expression
const ValidateStatus_Const = function (status) {
    if (status >= 200 && status < 300) {
        console.log("Status is Good")
    }
    else {
        console.log("Status is not good")
    }
}

ValidateStatus_Const(400)
//Arrow function

const ValidateStatus_Const2 = (status) => {
    if (status >= 200 && status < 300) {
        console.log("Status is Good")
    }
    else {
        console.log("Status is not good")
    }
}
ValidateStatus_Const2(250)

//All three examples are doing the same thing but in different ways.
//  Arrow function is more concise and easier to read, especially for simple functions.
//  It also has some differences in behavior compared to regular functions,
//  such as how it handles the 'this' keyword.