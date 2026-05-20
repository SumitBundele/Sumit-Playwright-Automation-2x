const prompt = require("prompt-sync")();
let num = prompt("Enter a number:");
if (num % 2 === 0) {
    console.log(num + " is an even number");
} else {
    console.log(num + " is an odd number");
}

//this will alos not used in browser console because of require function.
//  It is used in node js environment.
//not in playwright test because of prompt function.

